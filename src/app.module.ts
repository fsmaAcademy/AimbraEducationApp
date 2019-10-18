import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SecurityModule } from './security/security.module';
import { TypeOrmConfig } from './typeorm.config';

@Module({
  imports: [
    SecurityModule,
    TypeOrmModule.forRoot(
      new TypeOrmConfig({ name: 'aimbraSecurity' }).getConnection()
    ),
    TypeOrmModule.forRoot(
      new TypeOrmConfig({ name: 'aimbraPersonal' }).getConnection()
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
