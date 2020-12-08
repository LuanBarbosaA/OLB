import { DetalhesProteinaComponent } from './detalhes-proteina/detalhes-proteina.component';
import { ListaProteinaComponent } from './lista-proteina/lista-proteina.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaGeneComponent } from './lista/lista.component';
import { DetalhesGeneComponent } from './detalhes-gene/detalhes-gene.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisaComponent
  },
  {
    path: 'lista-proteina',
    component: ListaProteinaComponent
  },
  {
    path: 'lista-gene',
    component: ListaGeneComponent
  },
  {
    path: 'detalhes-proteina',
    component: DetalhesProteinaComponent
  },
  {
    path: 'detalhes-gene',
    component: DetalhesGeneComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentRoutingModule {}
