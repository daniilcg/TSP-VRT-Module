// delivery.repository.ts
import { EntityRepository, Repository } from 'typeorm';
import { Delivery } from './delivery.entity';
import { CreateDeliveryDto } from './dto/create-delivery.dto';

@EntityRepository(Delivery)
export class DeliveryRepository extends Repository<Delivery> {
  async createDelivery(createDeliveryDto: CreateDeliveryDto): Promise<Delivery> {
    // создание и сохранение новой посылки в базе данных
  }
}
