// delivery.service.ts
import { Injectable } from '@nestjs/common';
import { DeliveryRepository } from './delivery.repository';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { Delivery } from './delivery.entity';

@Injectable()
export class DeliveryService {
  constructor(private readonly deliveryRepository: DeliveryRepository) {}

  getAllDeliveries(): Promise<Delivery[]> {
    return this.deliveryRepository.find();
  }

  createDelivery(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    return this.deliveryRepository.createDelivery(createDeliveryDto);
  }
}
