import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStretegy } from './local.stretegy';

@Module({
  imports: [PassportModule],
  providers: [AuthService, AuthResolver, PrismaService, LocalStretegy],
})
export class AuthModule {}
