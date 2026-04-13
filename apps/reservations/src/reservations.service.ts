import { Inject, Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ReservationRepository } from './reservations.repository';
import { PAYMENTS_SERVICE } from '@app/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ReservationsService {
  constructor(
    private readonly reservationRepository: ReservationRepository,
    @Inject(PAYMENTS_SERVICE) paymentsService: ClientProxy,
  ) {}

  async create(CreateReservationDto: CreateReservationDto, userId: string) {
    return await this.reservationRepository.create({
      ...CreateReservationDto,
      timestamp: new Date(),
      userId,
    });
  }

  async findAll() {
    return this.reservationRepository.find({});
  }

  async findOne(id: string) {
    return this.reservationRepository.findOne({ _id: id });
  }

  async update(id: string, updateReservationDto: UpdateReservationDto) {
    return this.reservationRepository.fundOneAndUpdate(
      { _id: id },
      { $set: { ...updateReservationDto } },
    );
  }

  remove(id: string) {
    return this.reservationRepository.findOneAndDelete({ _id: id });
  }
}
