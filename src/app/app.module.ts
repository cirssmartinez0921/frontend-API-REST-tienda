import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { saludo } from './components/saludo.component';
import { DespedidaComponent } from './components/despedida/despedida.component';

@NgModule({
  declarations: [
    AppComponent,
    saludo,
    DespedidaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
