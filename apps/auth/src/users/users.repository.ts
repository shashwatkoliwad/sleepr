import { AbstractRepository } from '@app/common';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './models/users.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersReporsitory extends AbstractRepository<UserDocument> {
  protected readonly logger = new Logger(UsersReporsitory.name);

  constructor(@InjectModel(UserDocument.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
