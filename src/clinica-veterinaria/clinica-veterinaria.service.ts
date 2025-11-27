import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClinicaVeterinaria } from './clinica-veterinaria.entity';
import { CreateClinicaVeterinariaDto } from './dto/create-clinicaVeterinaria.dto';
import { UpdateClinicaVeterinariaDto } from './dto/update-clinicaVeterinaria.dto';

@Injectable()
export class ClinicaVeterinariaService {
  constructor(
    @InjectRepository(ClinicaVeterinaria)
    private readonly clinicaRepository: Repository<ClinicaVeterinaria>,
  ) {}

  create(dto: CreateClinicaVeterinariaDto) {
    const clinica = this.clinicaRepository.create(dto);
    return this.clinicaRepository.save(clinica);
  }

  findAll() {
    return this.clinicaRepository.find();
  }

  findOne(id: string) {
    return this.clinicaRepository.findOne({ where: { id } });
  }

  async update(id: string, dto: UpdateClinicaVeterinariaDto) {
    const clinica = await this.clinicaRepository.findOne({ where: { id } });
    if (!clinica) return { error: 'Clínica no encontrada' };

    Object.assign(clinica, dto);
    return this.clinicaRepository.save(clinica);
  }

  async remove(id: string) {
    const clinica = await this.clinicaRepository.findOne({ where: { id } });
    if (!clinica) return { error: 'Clínica no encontrada' };

    return this.clinicaRepository.remove(clinica);
  }

  calcularDosisTotal(dosisDiarias: number[]) {
    let total = 0;
    for (const dosis of dosisDiarias) total += dosis;

    let mensaje = '';
    if (total < 100) mensaje = 'Tratamiento de baja intensidad';
    else if (total <= 300) mensaje = 'Tratamiento moderado';
    else mensaje = 'Tratamiento fuerte, seguir observación';

    return { dosisTotal: total, mensaje };
  }

  controlPeso(pesoActual: number, pesoIdeal: number) {
    const diferencia = pesoActual - pesoIdeal;

    let mensaje = '';
    if (diferencia > 0) mensaje = 'La mascota está por encima del peso ideal';
    else if (diferencia < 0) mensaje = 'La mascota está por debajo del peso ideal';
    else mensaje = 'Peso ideal alcanzado';

    return { diferencia, mensaje };
  }
}
