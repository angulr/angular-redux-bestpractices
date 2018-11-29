import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './data/student.service';
import { throwIfAlreadyLoaded } from './module-import-guard';

export const NB_CORE_PROVIDERS = [StudentService];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
        ...NB_CORE_PROVIDERS,
      ],
    };
  }
}
