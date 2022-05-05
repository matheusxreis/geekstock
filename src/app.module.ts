import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';




@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      "type": "postgres",
      "host": "localhost",
      "port": Number(process.env.DATABASE_PORT),
      "username": process.env.DATABASE_USERNAME, 
      "password": process.env.DATABASE_PASSWORD,
      "database": process.env.DATABASE_NAME,
      "entities": ["dist/modules/**/*.entity{.ts,.js}"],
      "synchronize": true
    }),
    AuthModule,
    UserModule,
  ]
})
export class AppModule {}
