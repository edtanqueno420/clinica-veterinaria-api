import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClinicaVeterinariaModule } from './clinica-veterinaria/clinica-veterinaria.module';

@Module({
  imports: [
    // Configuración global de variables de entorno
    ConfigModule.forRoot({ isGlobal: true }),

    // Configuración TypeORM con PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      //ssl: { rejectUnauthorized: false }, 
    }),
    ClinicaVeterinariaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
