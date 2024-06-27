import { ApiProperty } from '@nestjs/swagger';

export class QrCodeDto {
  @ApiProperty()
  codigo: string;
  @ApiProperty()
  imagem: string;
}
