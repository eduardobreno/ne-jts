import 'reflect-metadata';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  InputType,
  Field,
  Int,
  ArgsType,
} from '@nestjs/graphql';
import { HttpStatus, Inject } from '@nestjs/common';
import { GraphQLError } from 'graphql';
import { User } from './user';
import { PrismaService } from './prisma.service';

@InputType()
class AddUserPayload {
  @Field()
  email: string;
  @Field()
  name: string;
}

@InputType()
class UpdateUserPayload {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
}

@ArgsType()
class GetUserArgs {
  @Field(() => Int)
  id: number;
}

function findUser({
  prismaService,
  user,
}: {
  prismaService: PrismaService;
  user: Partial<User>;
}) {
  return prismaService.user.findFirst({
    where: {
      OR: {
        id: user.id,
        email: user.email,
      },
    },
  });
}

@Resolver(User)
export class UserResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Mutation(() => User, { name: 'createUser' })
  async addUser(@Args('data') data: AddUserPayload, @Context() ctx) {
    const hasUser = await findUser({
      prismaService: this.prismaService,
      user: { email: data.email },
    });

    if (hasUser) {
      return new GraphQLError('User already exists', {
        extensions: { code: HttpStatus.CONFLICT },
      });
    }

    return this.prismaService.user.create({
      data: {
        email: data.email,
        name: data.name,
      },
    });
  }

  @Mutation(() => User, { name: 'updateUser' })
  async updateUser(@Args('data') data: UpdateUserPayload, @Context() ctx) {
    const hasUser = findUser({
      prismaService: this.prismaService,
      user: { id: data.id },
    });

    if (!hasUser) {
      return new GraphQLError('User not found', {
        extensions: { code: HttpStatus.NOT_FOUND },
      });
    }

    return this.prismaService.user.update({
      where: {
        id: data.id,
      },
      data: {
        ...data,
      },
    });
  }

  @Query(() => User, {
    name: 'user',
    description: 'Return user data',
  })
  async getUser(@Args() { id }: GetUserArgs) {
    const user = findUser({
      prismaService: this.prismaService,
      user: { id },
    });

    if (user) return user;

    return new GraphQLError('User not found', {
      extensions: { code: HttpStatus.NOT_FOUND },
    });
  }

  // @Query(() => [User], { nullable: true })
  // async allUsers(@Context() ctx) {
  //   return this.prismaService.user.findMany();
  // }
}
