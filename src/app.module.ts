import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      new TypeOrmConfig({ name: 'ktrak' }).getConnection()
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
