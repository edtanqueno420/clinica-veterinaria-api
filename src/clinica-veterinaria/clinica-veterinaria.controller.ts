import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ClinicaVeterinariaService } from './clinica-veterinaria.service';
import { CreateClinicaVeterinariaDto } from './dto/create-clinicaVeterinaria.dto';
import { UpdateClinicaVeterinariaDto } from './dto/update-clinicaVeterinaria.dto';

@Controller('clinica-veterinaria')
export class ClinicaVeterinariaController {
  constructor(private readonly clinicaService: ClinicaVeterinariaService) {}

  @Post()
  create(@Body() dto: CreateClinicaVeterinariaDto) {
    return this.clinicaService.create(dto);
  }

  @Get()
  findAll() {
    return this.clinicaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicaService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClinicaVeterinariaDto) {
    return this.clinicaService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicaService.remove(id);
  }


  @Post('/tratamientos/dosis-total')
  dosisTotal(@Body() body: { dosisDiarias: number[] }) {
    return this.clinicaService.calcularDosisTotal(body.dosisDiarias);
  }

  @Post('/control-peso')
  controlPeso(@Body() body: { pesoActual: number; pesoIdeal: number }) {
    return this.clinicaService.controlPeso(body.pesoActual, body.pesoIdeal);
  }
}
