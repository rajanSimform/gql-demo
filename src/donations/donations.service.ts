import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}

  create(createDonationInput: Prisma.DonationCreateInput) {
    return this.prisma.donation.create({
      data: createDonationInput,
    });
  }

  async findAll(orderBy?: { field?: string; direction?: string }) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return await this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }
  async findOne(uniqueInput: Prisma.DonationWhereUniqueInput) {
    return await this.prisma.donation.findUnique({
      where: uniqueInput,
    });
  }

  async getTotal() {
    const response = await this.prisma.donation.aggregate({
      _sum: {
        count: true,
      },
    });
    return response._sum.count;
  }
  //   update(id: number, updateDonationInput: UpdateDonationInput) {
  //     return `This action updates a #${id} donation`;
  //   }

  //   remove(id: number) {
  //     return `This action removes a #${id} donation`;
  //   }
}
