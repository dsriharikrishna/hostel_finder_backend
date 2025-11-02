import axios from 'axios';
import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/user.service';
import { AppDataSource } from '../config/db';
import { User } from '../entities/user.entity';

const userService = new UserService();

export class UserController {

  async getAllUsers(req: Request, res: Response) {
    try {
      const userRepo = AppDataSource.getRepository(User);
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
  };
  
  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const user = await userService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.json({ success: true, user });
    } catch (err) {
      next(err);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userData = req.body;
      const newUser = await userService.createUser(userData);
      res.status(201).json({ success: true, user: newUser });
    } catch (err) {
      next(err);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const userData = req.body;
      const updatedUser = await userService.updateUser(userId, userData);
      if (!updatedUser) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.json({ success: true, user: updatedUser });
    } catch (err) {
      next(err);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.id;
      const deleted = await userService.deleteUser(userId);
      if (!deleted) {
        return res.status(404).json({ success: false, message: 'User not found' });
      }
      res.json({ success: true, message: 'User deleted successfully' });
    } catch (err) {
      next(err);
    }
  }



}

export default UserController;