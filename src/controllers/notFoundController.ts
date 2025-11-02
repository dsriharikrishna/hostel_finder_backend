import { Request, Response } from 'express';

export class NotFound {
  notFoundRoutes(req: Request, res: Response) {
    res.status(404).json({
      status: 'error',
      message: 'Route not found',
    });
  }
}
