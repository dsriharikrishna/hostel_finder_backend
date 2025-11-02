import { AppDataSource } from '../config/db';
import { Booking } from '../entities/booking.entity';
import { Request, Response } from 'express';

export class BookingController {
  async getAllBookings(req: Request, res: Response) {
    try {
      const userRepo = AppDataSource.getRepository(Booking);
      const users = await userRepo.find();

      if (!users || users.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No users found',
        });
      }

      return res.json({
        success: true,
        users,
      });
    } catch (error) {
      console.error('❌ Error fetching users:', error);
      return res.status(500).json({
        success: false,
        message: 'Server error',
      });
    }
  }
}

export default BookingController;
