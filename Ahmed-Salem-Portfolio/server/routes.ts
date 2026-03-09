import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const parsed = insertContactMessageSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: "Invalid data", details: parsed.error.flatten() });
      }
      const message = await storage.createContactMessage(parsed.data);
      return res.status(201).json({ success: true, id: message.id });
    } catch (err) {
      console.error("Contact error:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/api/contact", async (_req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (err) {
      return res.status(500).json({ error: "Internal server error" });
    }
  });

  return httpServer;
}
