import { PrismaClient, } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.users.create({
    data: {
      name: 'Admin User',
      username: 'admin',
      email: 'admin@example.com',
      role: 'ADMIN',
      description: 'System administrator',
    },
  });

  const user = await prisma.users.create({
    data: {
      name: 'Regular User',
      username: 'user1',
      email: 'user@example.com',
      role: 'USER',
      description: 'A regular user on the platform',
    },
  });

  const hostelerUser = await prisma.users.create({
    data: {
      name: 'Hosteler User',
      username: 'hostel01',
      email: 'hosteler@example.com',
      role: 'HOSTELER',
      description: 'User with hosteler role',
    },
  });

  const hosteler = await prisma.hostelers.create({
    data: {
      name: 'Rahul Kumar',
      roomNo: 'A101',
      description: 'Hosteler assigned to Block A',
    },
  });

  await prisma.bookings.create({
    data: {
      userId: user.id,
      hostelerId: hosteler.id,
      description: 'Booking Rahul to User1',
    },
  });

  console.log('✅ Seed data inserted');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding data:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
