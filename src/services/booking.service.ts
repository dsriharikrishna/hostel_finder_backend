// src/services/booking.service.ts
import { Booking } from "../entities/booking.entity";
import getBookingRepository from "../repositories/booking.repository";
import { responseSanitizer } from "../middlewares/responseSanitizer";

const bookingRepo = getBookingRepository();

export class BookingService {
  async getAllBookings() {
    const bookings = await bookingRepo.find({
      relations: ['user', 'hosteler']
    });
    return bookings.map(b => responseSanitizer(b));
  }

  async getBookingById(id: string) {
    const booking = await bookingRepo.findOne({
      where: { id: Number(id) },
      relations: ['user', 'hosteler']
    });
    if (!booking) throw new Error('Booking not found');
    return responseSanitizer(booking);
  }

  async createBooking(bookingData: Partial<Booking>) {
    const booking = bookingRepo.create(bookingData);
    const savedBooking = await bookingRepo.save(booking);
    return responseSanitizer(savedBooking);
  }

  async updateBooking(id: string, bookingData: Partial<Booking>) {
    const booking = await bookingRepo.findOneBy({ id: Number(id) });
    if (!booking) return null;

    Object.assign(booking, bookingData);
    const updatedBooking = await bookingRepo.save(booking);
    return responseSanitizer(updatedBooking);
  }

  async deleteBooking(id: string) {
    const booking = await bookingRepo.findOneBy({ id: Number(id) });
    if (!booking) return false;

    await bookingRepo.remove(booking);
    return true;
  }
}
