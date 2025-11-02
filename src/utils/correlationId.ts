import { v4 as uuidv4 } from 'uuid';

const correlationIdKey = 'X-Correlation-ID';

export function generateCorrelationId(): string {
    return uuidv4();
}

export function attachCorrelationId(req :any, res :any, next :any): void {
    const correlationId = req.headers[correlationIdKey.toLowerCase()] || generateCorrelationId();
    req.correlationId = correlationId;
    res.setHeader(correlationIdKey, correlationId);
    next();
}