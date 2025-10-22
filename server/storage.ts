import {
  users,
  exercises,
  favorites,
  type User,
  type UpsertUser,
  type Exercise,
  type InsertExercise,
  type Favorite,
  type InsertFavorite,
} from "@shared/schema";
import { db } from "./db";
import { eq, and, ilike, or } from "drizzle-orm";

// Interface for storage operations
export interface IStorage {
  // User operations
  getUser(id: string): Promise<User | undefined>;
  getUserByEmail(email: string): Promise<User | undefined>;
  createUser(email: string, password: string, firstName?: string, lastName?: string): Promise<User>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Exercise operations
  getExercises(): Promise<Exercise[]>;
  getExercise(id: string): Promise<Exercise | undefined>;
  searchExercises(query: string): Promise<Exercise[]>;
  filterExercisesByCategory(category: string): Promise<Exercise[]>;
  createExercise(exercise: InsertExercise): Promise<Exercise>;
  
  // Favorite operations
  getUserFavorites(userId: string): Promise<Exercise[]>;
  addFavorite(userId: string, exerciseId: string): Promise<Favorite>;
  removeFavorite(userId: string, exerciseId: string): Promise<void>;
  isFavorite(userId: string, exerciseId: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User operations
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.email, email));
    return user;
  }

  async createUser(email: string, password: string, firstName?: string, lastName?: string): Promise<User> {
    const [user] = await db
      .insert(users)
      .values({ email, password, firstName, lastName })
      .returning();
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(userData)
      .onConflictDoUpdate({
        target: users.id,
        set: {
          ...userData,
          updatedAt: new Date(),
        },
      })
      .returning();
    return user;
  }

  // Exercise operations
  async getExercises(): Promise<Exercise[]> {
    return await db.select().from(exercises);
  }

  async getExercise(id: string): Promise<Exercise | undefined> {
    const [exercise] = await db
      .select()
      .from(exercises)
      .where(eq(exercises.id, id));
    return exercise;
  }

  async searchExercises(query: string): Promise<Exercise[]> {
    const searchPattern = `%${query}%`;
    return await db
      .select()
      .from(exercises)
      .where(
        or(
          ilike(exercises.title, searchPattern),
          ilike(exercises.category, searchPattern)
        )
      );
  }

  async filterExercisesByCategory(category: string): Promise<Exercise[]> {
    if (category === "Todos") {
      return this.getExercises();
    }
    return await db
      .select()
      .from(exercises)
      .where(eq(exercises.category, category));
  }

  async createExercise(exercise: InsertExercise): Promise<Exercise> {
    const [newExercise] = await db
      .insert(exercises)
      .values(exercise)
      .returning();
    return newExercise;
  }

  // Favorite operations
  async getUserFavorites(userId: string): Promise<Exercise[]> {
    const result = await db
      .select({
        exercise: exercises,
      })
      .from(favorites)
      .innerJoin(exercises, eq(favorites.exerciseId, exercises.id))
      .where(eq(favorites.userId, userId));
    
    return result.map(row => row.exercise);
  }

  async addFavorite(userId: string, exerciseId: string): Promise<Favorite> {
    const [favorite] = await db
      .insert(favorites)
      .values({ userId, exerciseId })
      .returning();
    return favorite;
  }

  async removeFavorite(userId: string, exerciseId: string): Promise<void> {
    await db
      .delete(favorites)
      .where(
        and(
          eq(favorites.userId, userId),
          eq(favorites.exerciseId, exerciseId)
        )
      );
  }

  async isFavorite(userId: string, exerciseId: string): Promise<boolean> {
    const [result] = await db
      .select()
      .from(favorites)
      .where(
        and(
          eq(favorites.userId, userId),
          eq(favorites.exerciseId, exerciseId)
        )
      );
    return !!result;
  }
}

export const storage = new DatabaseStorage();
