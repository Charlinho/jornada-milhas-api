import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reserva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  destino: string;

  @Column()
  dataIda: string;

  @Column()
  dataVolta: string;

  @Column()
  origem: string;

  @Column()
  estadoOrigem: string;

  @Column()
  adultos: number;

  @Column()
  valorFinal: number;

  @ManyToOne(() => User, (user) => user.reservas)
  user: User;
}
