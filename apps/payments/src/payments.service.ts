import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Razorpay from 'razorpay';
import { Payments } from 'razorpay/dist/types/payments';

@Injectable()
export class PaymentsService {
  private readonly razorpay: Razorpay;

  constructor(private readonly configService: ConfigService) {
    this.razorpay = new Razorpay({
      key_id: this.configService.get('RAZORPAY_KEY_ID'),
      key_secret: this.configService.get('RAZORPAY_KEY_SECRET'),
    });
  }

  async createCharge(
    paymentData: Payments.RazorpayPaymentS2SCreateRequestBody,
  ) {
    const order = await this.razorpay.orders.create({
      amount: paymentData.amount,
      currency: paymentData.currency,
    });

    const payment = await this.razorpay.payments.createPaymentJson({
      ...paymentData,
      order_id: order.id,
    });

    return payment;
  }
}
