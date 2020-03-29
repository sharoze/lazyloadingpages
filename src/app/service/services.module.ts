
import { NgModule } from '@angular/core';
import { DataService } from './data.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [],
})
export class ServicesModule {
  static forRoot() {
    return {
      ngModule: ServicesModule,
      providers: [DataService],
    };
  }
}

export { DataService };
