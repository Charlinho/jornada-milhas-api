import { ApiProperty } from '@nestjs/swagger';

export class ReservaDto {
  @ApiProperty()
  destino: string;
  @ApiProperty()
  dataIda: string;
  @ApiProperty()
  dataVolta: string;
  @ApiProperty()
  origem: string;
  @ApiProperty()
  estadoOrigem: string;
  @ApiProperty()
  adultos: number;
  @ApiProperty()
  valorFinal: number;
}
