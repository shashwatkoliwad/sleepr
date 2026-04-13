import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CardDto {
  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  expiry_month: string;

  @IsString()
  @IsNotEmpty()
  expiry_year: string;

  @IsString()
  @IsNotEmpty()
  cvv: string;
}

export class CreateChargeDto {
  @IsNumber()
  amount: number;

  @IsString()
  @IsNotEmpty()
  currency: string;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @ValidateNested()
  @Type(() => CardDto)
  card: CardDto;
}
