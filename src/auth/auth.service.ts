import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { User } from 'src/graphql';
import { LoginInput } from './dto/login-input.dto';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  async validateUser(email: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Partial<User>) {
    return {
      access_token: 'jwt',
      user,
    };
  }
}
