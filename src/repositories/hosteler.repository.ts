import { Hosteler } from '../entities/hostelers.entity';
import { AppDataSource } from '../config/db';

export const getUserRepository = () => AppDataSource.getRepository(Hosteler);
export default getUserRepository;
