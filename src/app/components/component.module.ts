import { DetalhesProteinaComponent } from './detalhes-proteina/detalhes-proteina.component';
import { ListaProteinaComponent } from './lista-proteina/lista-proteina.component';
import { ListaGeneComponent } from './lista/lista.component';
import { ComponentRoutingModule } from './component-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesGeneComponent } from './detalhes-gene/detalhes-gene.component';

@NgModule({
  declarations: [
    PesquisaComponent,
    ListaGeneComponent,
    ListaProteinaComponent,
    DetalhesGeneComponent,
    DetalhesProteinaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
