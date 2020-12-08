import { ComponentRoutingModule } from './component-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PesquisaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
