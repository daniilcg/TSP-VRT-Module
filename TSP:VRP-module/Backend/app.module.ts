// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryController } from './delivery.controller';
import { DeliveryService } from './delivery.service';
import { DeliveryRepository } from './delivery.repository';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // настройки подключения к базе данных
    }),
    TypeOrmModule.forFeature([DeliveryRepository]),
  ],
  controllers: [AppController, DeliveryController],
  providers: [AppService, DeliveryService],
})
export class AppModule {}
