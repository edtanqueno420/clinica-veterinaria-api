import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ClinicaVeterinaria {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nombre: string;

  @Column()
  especie: string;

  @Column()
  raza: string;

  @Column()
  color: string;

  @Column()
  fecha_nacimiento: string;

  @Column()
  peso_kg: number;

  @Column()
  nombre_dueno: string;

  @Column()
  telefono_dueno: string;

  @Column()
  email_dueno: string;

  @Column()
  estado: string;
}