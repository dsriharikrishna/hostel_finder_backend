import { Redis } from 'ioredis';

const redis = new Redis();

export const setCache = async (key: string, value: any, expirationInSeconds: number) => {
    await redis.set(key, JSON.stringify(value), 'EX', expirationInSeconds);
};

export const getCache = async (key: string) => {
    const data = await redis.get(key);
    return data ? JSON.parse(data) : null;
};

export const deleteCache = async (key: string) => {
    await redis.del(key);
};