import { Injectable } from '@nestjs/common';
import { LazyModuleLoader } from '@nestjs/core';

@Injectable()
export class AppService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {}

  async getLazyLoadedService(): Promise<string> {
    const module = await this.lazyModuleLoader.load(
      async () => (await import('./lazy-loaded.module')).LazyLoadedModule,
    );
    return module.get('LazyLoadedService').name;
  }
}
