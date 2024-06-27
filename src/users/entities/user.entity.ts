import { Reserva } from 'src/reserva/entities/reserva.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nome: string;
  @Column()
  nascimento: Date;
  @Column()
  cpf: string;
  @Column()
  telefone: string;
  @Column()
  email: string;
  @Column()
  senha: string;
  @Column({ nullable: true })
  genero: string;

  @Column()
  cidade: string;

  @OneToMany(() => Reserva, (reserva) => reserva.user)
  reservas: Reserva[];
}
