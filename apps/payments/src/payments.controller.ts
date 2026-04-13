import { Controller } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateChargeDto } from './dto/create-charge.dto';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern('create_charge')
  async createCharge(@Payload() createChargeDto: CreateChargeDto) {
    return this.paymentsService.createCharge({
      ...createChargeDto,
      order_id: '',
      customer_id: '',
      notes: {},
      ip: '127.0.0.1',
      user_agent: null,
      save: false,
    });
  }
}
