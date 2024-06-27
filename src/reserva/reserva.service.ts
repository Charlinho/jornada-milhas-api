import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reserva } from './entities/reserva.entity';
import { ReservaDto } from './dto/reserva.dto';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private repository: Repository<Reserva>,
  ) {}

  async findReservasByEmail(email: string) {
    return this.repository
      .createQueryBuilder('reserva')
      .innerJoinAndSelect('reserva.user', 'user', 'user.email = :email', {
        email,
      })
      .getMany();
  }

  create(reservaDto: ReservaDto, user: User) {
    const reserva = {
      ...reservaDto,
      user: null,
    };

    return this.repository.save(reserva);
  }
}
