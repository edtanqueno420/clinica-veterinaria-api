import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinicaVeterinariaController } from './clinica-veterinaria.controller';
import { ClinicaVeterinariaService } from './clinica-veterinaria.service';
import {ClinicaVeterinaria } from './clinica-veterinaria.entity';
@Module({
  imports: [TypeOrmModule.forFeature([ClinicaVeterinaria])],
  controllers: [ClinicaVeterinariaController],
  providers: [ClinicaVeterinariaService]
})
export class ClinicaVeterinariaModule {}
