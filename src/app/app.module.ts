import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { IncluirComponent } from './core/doador/incluir/incluir.component';
import { ListarComponent } from './core/doador/listar/listar.component';
import { CardComponent } from './layouts/card/card.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { PaginaNaoEncontradaComponent } from './layouts/pages/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PaginaInicialComponent } from './layouts/pages/pagina-inicial/pagina-inicial.component';
import { HttpErrorInterceptor } from './shared/http-error.interceptor';
import { IncluirJsonComponent } from './core/doador/incluir/incluir-string-json/incluir-json.component';
import { IncluirArquivoJsonComponent } from './core/doador/incluir/incluir-arquivo-json/incluir-arquivo-json.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IncluirComponent,
    ListarComponent,
    CardComponent,
    PaginaNaoEncontradaComponent,
    PaginaInicialComponent,
    IncluirJsonComponent,
    IncluirArquivoJsonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
