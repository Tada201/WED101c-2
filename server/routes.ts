import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve assets from the assets directory
  app.use('/assets', express.static(path.resolve(process.cwd(), 'assets')));

  // API routes for future functionality
  app.get('/api/health', (req, res) => {
    res.json({ status: 'online', message: 'GLaDOS is monitoring' });
  });

  // Mock authentication endpoint
  app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    
    // TODO: Implement proper authentication
    if (username && password) {
      res.json({ 
        success: true, 
        message: 'Welcome to Aperture Science',
        user: { username, role: 'test_subject' }
      });
    } else {
      res.status(401).json({ 
        success: false, 
        message: 'Invalid credentials. GLaDOS is disappointed.' 
      });
    }
  });

  // Gallery endpoint for future dynamic content
  app.get('/api/gallery', (req, res) => {
    res.json({
      images: [
        { id: 1, title: 'Test Chamber 01', url: '/assets/images/chamber01.jpg' },
        { id: 2, title: 'Laboratory Complex', url: '/assets/images/laboratory.jpg' },
        { id: 3, title: 'Facility Corridor', url: '/assets/images/corridor.jpg' },
      ]
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
