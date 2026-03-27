import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersReporsitory } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersReporsitory) {}

  async create(createUserDto: CreateUserDto) {
    this.usersRepository.create(createUserDto);
  }
}
