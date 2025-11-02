import { Request, Response } from 'express';

export class HealthController {
  checkHealth(req: Request, res: Response) {
    res.json({ message: 'server is running ', status: 'ok' });
  }
}

export default HealthController;
