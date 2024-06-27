import { Body, Controller, Post, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ReservaDto } from './dto/reserva.dto';
import { ReservaService } from './reserva.service';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';
import { jwtConstants } from 'src/auth/constants';

@Controller('reserva')
export class ReservaController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly reservaService: ReservaService,
    private readonly usersService: UsersService,
  ) {}

  @Post()
  async criarReserva(
    @Body() reservaDto: ReservaDto,
    @Req() request: any,
  ): Promise<any> {
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('Token JWT não fornecido.');
    }

    try {
      const decoded = this.jwtService.verify(token, {
        secret: jwtConstants.secret,
      });
      console.log('Dados do Token:', decoded);

      const user: User = await this.usersService.findOne(decoded.email);

      this.reservaService.create(reservaDto, user);

      return {
        message: 'Reserva criada com sucesso',
      };
    } catch (error) {
      throw new Error('Token JWT inválido ou expirado.');
    }
  }
}
