import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, UserService, UserResolver, PrismaService],
})
export class AppModule {}
