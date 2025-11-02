import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100, 
  message: {
    status: 'error',
    message: 'Too many requests, please try again later.',
  },
});

const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  limiter(req, res, next);
};

export default rateLimiter;