import { Booking } from '../entities/booking.entity';
import { AppDataSource } from '../config/db';

export const getUserRepository = () => AppDataSource.getRepository(Booking);
export default getUserRepository;               
