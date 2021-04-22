import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncluirJsonComponent } from './core/doador/incluir/incluir-json/incluir-json.component';
import { IncluirComponent } from './core/doador/incluir/incluir.component';
import { ListarComponent } from './core/doador/listar/listar.component';
import { PaginaInicialComponent } from './layouts/pages/pagina-inicial/pagina-inicial.component';
import { PaginaNaoEncontradaComponent } from './layouts/pages/pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: PaginaInicialComponent,
  },
  {
    path: 'doador/incluir',
    component: IncluirComponent,
  },
  {
    path: 'doador/incluir-json',
    component: IncluirJsonComponent,
  },
  {
    path: 'doador/listar',
    component: ListarComponent,
  },
  {
    path: '**',
    component: PaginaNaoEncontradaComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
