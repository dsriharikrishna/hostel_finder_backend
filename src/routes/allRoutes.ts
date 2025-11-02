import { Router } from 'express';
import { HealthController } from '../controllers/healthController';
import BookingController from '../controllers/bookingController';
import HostelController from '../controllers/HostelerController';
import UserController from '../controllers/userController';
import { NotFound } from '../controllers/notFoundController';

const router = Router();
const healthController = new HealthController();
const bookingController = new BookingController();
const hostelController = new HostelController();
const controller = new UserController();


const NotFoundController = new NotFound();

router.get('/health', healthController.checkHealth);
router.get("/bookings",bookingController.getAllBookings);
router.get("/hostels",hostelController.getAllHosteler);
router.get('/users', controller.getAllUsers.bind(controller));
router.get('/users/:id', controller.getUserById.bind(controller));
router.post('/users', controller.createUser.bind(controller));
router.patch('/users/:id', controller.updateUser.bind(controller));
router.delete('/users/:id', controller.deleteUser.bind(controller));










// not found route
router.get("/*",NotFoundController.notFoundRoutes)
router.post("/*",NotFoundController.notFoundRoutes)
router.patch("/*",NotFoundController.notFoundRoutes)
router.put("/*",NotFoundController.notFoundRoutes)
router.delete("/*",NotFoundController.notFoundRoutes)




export default router;