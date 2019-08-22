import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadComponentComponent } from './components/head-component/head-component.component';



@NgModule({
  declarations: [HeadComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HeadComponentComponent
  ]
})
export class ModuleAModule { }
