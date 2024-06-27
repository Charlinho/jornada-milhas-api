import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservaService } from './reserva.service';
import { Reserva } from './entities/reserva.entity';

@Module({
  providers: [ReservaService],
  imports: [TypeOrmModule.forFeature([Reserva])],
  exports: [TypeOrmModule, ReservaService],
})
export class ReservaModule {}
