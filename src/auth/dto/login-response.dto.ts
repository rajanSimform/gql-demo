import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/@generated/prisma-nestjs-graphql/user/user.model';

@ObjectType()
export class LoignResponse {
  @Field()
  access_token: string;

  @Field()
  user: Partial<User>;
}
