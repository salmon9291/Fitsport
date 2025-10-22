import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { setupAuth, isAuthenticated } from "./replitAuth";
import { insertExerciseSchema, insertFavoriteSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Auth middleware (from Replit Auth integration)
  await setupAuth(app);

  // Auth routes (from Replit Auth integration)
  app.get("/api/auth/user", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const user = await storage.getUser(userId);
      res.json(user);
    } catch (error) {
      console.error("Error fetching user:", error);
      res.status(500).json({ message: "Failed to fetch user" });
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
      console.error("Error fetching exercises:", error);
      res.status(500).json({ message: "Failed to fetch exercises" });
    }
  });

  app.get("/api/exercises/:id", async (req, res) => {
    try {
      const exercise = await storage.getExercise(req.params.id);
      if (!exercise) {
        return res.status(404).json({ message: "Exercise not found" });
      }
      res.json(exercise);
    } catch (error) {
      console.error("Error fetching exercise:", error);
      res.status(500).json({ message: "Failed to fetch exercise" });
    }
  });

  app.post("/api/exercises", isAuthenticated, async (req, res) => {
    try {
      const validatedData = insertExerciseSchema.parse(req.body);
      const exercise = await storage.createExercise(validatedData);
      res.status(201).json(exercise);
    } catch (error) {
      console.error("Error creating exercise:", error);
      res.status(400).json({ message: "Invalid exercise data" });
    }
  });

  // Favorite routes (protected)
  app.get("/api/favorites", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const favorites = await storage.getUserFavorites(userId);
      res.json(favorites);
    } catch (error) {
      console.error("Error fetching favorites:", error);
      res.status(500).json({ message: "Failed to fetch favorites" });
    }
  });

  app.post("/api/favorites", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { exerciseId } = req.body;
      
      if (!exerciseId) {
        return res.status(400).json({ message: "Exercise ID is required" });
      }

      const favorite = await storage.addFavorite(userId, exerciseId);
      res.status(201).json(favorite);
    } catch (error) {
      console.error("Error adding favorite:", error);
      res.status(500).json({ message: "Failed to add favorite" });
    }
  });

  app.delete("/api/favorites/:exerciseId", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { exerciseId } = req.params;
      
      await storage.removeFavorite(userId, exerciseId);
      res.status(204).send();
    } catch (error) {
      console.error("Error removing favorite:", error);
      res.status(500).json({ message: "Failed to remove favorite" });
    }
  });

  app.get("/api/favorites/:exerciseId/check", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { exerciseId } = req.params;
      
      const isFavorite = await storage.isFavorite(userId, exerciseId);
      res.json({ isFavorite });
    } catch (error) {
      console.error("Error checking favorite:", error);
      res.status(500).json({ message: "Failed to check favorite" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
