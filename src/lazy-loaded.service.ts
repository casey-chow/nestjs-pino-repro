import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class LazyLoadedService {
  constructor(
    @InjectPinoLogger('LazyLoadedService') private readonly logger: PinoLogger,
  ) {}
}
