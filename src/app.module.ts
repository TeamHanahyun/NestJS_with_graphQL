import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UserService } from './user/user.service';
import { UserResolver } from './user/user.resolver';
import { PrismaService } from 'prisma/prisma.service';
import { PostService } from './post/post.service';
import { PostResolver } from './post/post.resolver';
import { CommentService } from './comment/comment.service';
import { CommentResolver } from './comment/comment.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    })
  ],
  controllers: [AppController],
  providers: [AppService, UserService, UserResolver, PrismaService, PostService, PostResolver, CommentService, CommentResolver],
})
export class AppModule {}
