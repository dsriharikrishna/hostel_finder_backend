// src/services/user.service.ts
import { getUserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';

const userRepo = getUserRepository();

export class UserService {
  async getAllUsers() {
    const users = await userRepo.find();
    return users.map(({ password, ...rest }) => rest);
  }

  async getUserById(id: string) {
    const user = await userRepo.findOneBy({ id: Number(id) });
    if (!user) throw new Error('User not found');
    const { password, ...rest } = user;
    return rest;
  }

  async createUser(userData: Partial<User>) {
    const existing = await userRepo.findOne({
      where: [
        { email: userData.email },
        { username: userData.username }
      ]
    });

    if (existing) throw new Error('User already exists');

    const user = userRepo.create(userData);
    const savedUser = await userRepo.save(user);
    const { password, ...rest } = savedUser;
    return rest;
  }

  async updateUser(id: string, userData: Partial<User>) {
    const user = await userRepo.findOneBy({ id: Number(id) });
    if (!user) return null;

    Object.assign(user, userData);
    const updatedUser = await userRepo.save(user);
    const { password, ...rest } = updatedUser;
    return rest;
  }

  async deleteUser(id: string) {
    const user = await userRepo.findOneBy({ id: Number(id) });
    if (!user) return false;

    await userRepo.remove(user);
    return true;
  }
}
