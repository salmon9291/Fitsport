
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { authMiddleware, hashPassword, comparePassword, generateToken, type AuthRequest } from "./auth";
import { insertExerciseSchema, registerSchema, loginSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  
  // Auth routes
  app.post("/api/register", async (req, res) => {
    try {
      const validatedData = registerSchema.parse(req.body);
      
      const existingUser = await storage.getUserByEmail(validatedData.email);
      if (existingUser) {
        return res.status(400).json({ message: "El usuario ya existe" });
      }

      const hashedPassword = await hashPassword(validatedData.password);
      const user = await storage.createUser(
        validatedData.email,
        hashedPassword,
        validatedData.firstName,
        validatedData.lastName
      );

      const token = generateToken(user.id);
      
      res.status(201).json({
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    } catch (error) {
      console.error("Error en registro:", error);
      res.status(400).json({ message: "Datos de registro inválidos" });
    }
  });

  app.post("/api/login", async (req, res) => {
    try {
      const validatedData = loginSchema.parse(req.body);
      
      const user = await storage.getUserByEmail(validatedData.email);
      if (!user) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      const isValidPassword = await comparePassword(validatedData.password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ message: "Credenciales inválidas" });
      }

      const token = generateToken(user.id);
      
      res.json({
        token,
        user: {
          id: user.id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    } catch (error) {
      console.error("Error en login:", error);
      res.status(400).json({ message: "Datos de login inválidos" });
    }
  });

  app.get("/api/auth/user", authMiddleware, async (req: AuthRequest, res) => {
    try {
      const user = await storage.getUser(req.userId!);
      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }
      res.json({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      });
    } catch (error) {
      console.error("Error obteniendo usuario:", error);
      res.status(500).json({ message: "Error al obtener usuario" });
    }
  });

  // Exercise routes
  app.get("/api/exercises", async (req, res) => {
    try {
      const { search, category } = req.query;
      
      let result;
      if (search) {
        result = await storage.searchExercises(search as string);
      } else if (category) {
        result = await storage.filterExercisesByCategory(category as string);
      } else {
        result = await storage.getExercises();
      }
      
      res.json(result);
    } catch (error) {
      console.error("Error obteniendo ejercicios:", error);
      res.status(500).json({ message: "Error al obtener ejercicios" });
    }
  });

  app.get("/api/exercises/:id", async (req, res) => {
    try {
      const exercise = await storage.getExercise(req.params.id);
      if (!exercise) {
        return res.status(404).json({ message: "Ejercicio no encontrado" });
      }
      res.json(exercise);
    } catch (error) {
      console.error("Error obteniendo ejercicio:", error);
      res.status(500).json({ message: "Error al obtener ejercicio" });
    }
  });

  app.post("/api/exercises", authMiddleware, async (req: AuthRequest, res) => {
    try {
      const validatedData = insertExerciseSchema.parse(req.body);
      const exercise = await storage.createExercise(validatedData);
      res.status(201).json(exercise);
    } catch (error) {
      console.error("Error creando ejercicio:", error);
      res.status(400).json({ message: "Datos de ejercicio inválidos" });
    }
  });

  // Favorite routes (protected)
  app.get("/api/favorites", authMiddleware, async (req: AuthRequest, res) => {
    try {
      const favorites = await storage.getUserFavorites(req.userId!);
      res.json(favorites);
    } catch (error) {
      console.error("Error obteniendo favoritos:", error);
      res.status(500).json({ message: "Error al obtener favoritos" });
    }
  });

  app.post("/api/favorites", authMiddleware, async (req: AuthRequest, res) => {
    try {
      const { exerciseId } = req.body;
      
      if (!exerciseId) {
        return res.status(400).json({ message: "ID de ejercicio requerido" });
      }

      const favorite = await storage.addFavorite(req.userId!, exerciseId);
      res.status(201).json(favorite);
    } catch (error) {
      console.error("Error agregando favorito:", error);
      res.status(500).json({ message: "Error al agregar favorito" });
    }
  });

  app.delete("/api/favorites/:exerciseId", authMiddleware, async (req: AuthRequest, res) => {
    try {
      const { exerciseId } = req.params;
      
      await storage.removeFavorite(req.userId!, exerciseId);
      res.status(204).send();
    } catch (error) {
      console.error("Error eliminando favorito:", error);
      res.status(500).json({ message: "Error al eliminar favorito" });
    }
  });

  app.get("/api/favorites/:exerciseId/check", authMiddleware, async (req: AuthRequest, res) => {
    try {
      const { exerciseId } = req.params;
      
      const isFavorite = await storage.isFavorite(req.userId!, exerciseId);
      res.json({ isFavorite });
    } catch (error) {
      console.error("Error verificando favorito:", error);
      res.status(500).json({ message: "Error al verificar favorito" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
