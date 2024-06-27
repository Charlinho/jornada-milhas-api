import { Injectable } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { randomBytes } from 'crypto';
import { QrCodeDto } from './dto/qr-code.dto';

@Injectable()
export class PagamentoService {
  async generateQRCode(): Promise<QrCodeDto> {
    const codigo = randomBytes(20).toString('hex');
    const imagem = await QRCode.toDataURL(codigo);

    return { codigo, imagem };
  }
}
