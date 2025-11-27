import { IsOptional, IsString } from 'class-validator';

export class UpdateClinicaVeterinariaDto {
  @IsOptional()
  @IsString()
  username?: string;

  @IsOptional()
  @IsString()
  password?: string;
}
