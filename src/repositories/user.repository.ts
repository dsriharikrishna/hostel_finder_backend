import { AppDataSource } from '../config/db';
import { User } from '../entities/user.entity';

export const getUserRepository = () => AppDataSource.getRepository(User);
export default getUserRepository;               