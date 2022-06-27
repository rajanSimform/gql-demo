import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.donation.deleteMany();
  const sample = await prisma.donation.create({
    data: {
      email: 'rajan@gmail.com',
      count: 50000,
      displayName: 'Rajan Lodhiya',
    },
  });
  console.log({ sample });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
