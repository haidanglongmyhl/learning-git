import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { User } from './users/user.entity';
import { TagsModule } from './tags/tags.module';
import { MetaOptionsModule } from './meta-options/meta-options.module';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRootAsync({
      imports: [],
      inject: [],
      useFactory: () => ({
        type: 'postgres',
        //entities: [User],
        autoLoadEntities: true,
        synchronize: true,
        port: 5432,
        username: 'postgres',
        password: 'api',
        host: 'localhost',
        database: 'nestjs-blog',
      }),
    }),
    TagsModule,
    MetaOptionsModule,
    CategoriesModule,
  ],
  controllers: [AppController, CategoriesController],
  providers: [AppService],
})
export class AppModule {}
