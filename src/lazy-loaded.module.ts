import { Module } from '@nestjs/common';
import { LazyLoadedService } from './lazy-loaded.service';

@Module({
  providers: [LazyLoadedService],
})
export class LazyLoadedModule {}
