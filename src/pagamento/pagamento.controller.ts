import { Controller, Get, Res } from '@nestjs/common';
import { PagamentoService } from './pagamento.service';
import { ApiOkResponse } from '@nestjs/swagger';
import { QrCodeDto } from './dto/qr-code.dto';

@Controller('pagamento')
export class PagamentoController {
  constructor(private readonly pagamentoService: PagamentoService) {}

  @Get('qrcode')
  @ApiOkResponse({
    type: QrCodeDto,
  })
  async generate() {
    return await this.pagamentoService.generateQRCode();
  }
}
