// db.ts
import mysql, { Pool } from 'mysql2/promise';
import config from './index';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
import { Booking } from '../entities/booking.entity';
import { Hosteler } from '../entities/hostelers.entity';

// Create and export a typed MySQL connection pool
const pool: Pool = mysql.createPool({
  host: config.dbHost,
  port: config.dbPort,
  user: config.dbUser,
  password: config.password,
  database: config.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: config.dbHost,
  port: config.dbPort,
  username: config.dbUser,
  password: config.password,
  database: config.database,
  entities: [User, Booking, Hosteler], 
  synchronize: false,
  dropSchema: false,
});


