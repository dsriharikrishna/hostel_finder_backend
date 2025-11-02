// src/middlewares/requestSanitizer.ts
import { Request, Response, NextFunction } from 'express';
import sanitizeHtml from 'sanitize-html';

const requestSanitizer = (req: Request, res: Response, next: NextFunction) => {
  if (req.body) {
    req.body = JSON.parse(sanitizeHtml(JSON.stringify(req.body), {
      allowedTags: [],
      allowedAttributes: {}
    }));
  }

  if (req.query) {
    Object.keys(req.query).forEach((key) => {
      const value = req.query[key];
      if (typeof value === 'string') {
        req.query[key] = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {}
        });
      }
    });
  }

  if (req.params) {
    Object.keys(req.params).forEach((key) => {
      const value = req.params[key];
      if (typeof value === 'string') {
        req.params[key] = sanitizeHtml(value, {
          allowedTags: [],
          allowedAttributes: {}
        });
      }
    });
  }

  next();
};

export default requestSanitizer;
