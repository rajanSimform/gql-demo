import { UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import {
  Args,
  Context,
  GqlContextType,
  GqlExecutionContext,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-input.dto';
import { LoignResponse } from './dto/login-response.dto';
import { GQLAuthGuard } from './gql-auth.guard';

@Resolver('Auth')
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoignResponse)
  @UseGuards(GQLAuthGuard)
  login(@Args('loginInput') loginInput: LoginInput, @Context() context) {
    return this.authService.login(context.user);
  }
}
