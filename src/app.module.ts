import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { LoggerModule } from 'nestjs-pino';

@Module({
  imports: [LoggerModule.forRoot()],
  providers: [AppService],
})
export class AppModule {}
