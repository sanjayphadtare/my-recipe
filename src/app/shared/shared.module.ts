import { NgModule } from '@angular/core';
import { Alertcomponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations:[
    Alertcomponent,
    LoadingSpinnerComponent,
    DropdownDirective
  ],
  imports:[
    CommonModule,

  ],
  exports:[
    Alertcomponent,
    LoadingSpinnerComponent,
    DropdownDirective,
    CommonModule
  ]
})
export class SharedModule {}