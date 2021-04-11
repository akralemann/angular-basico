import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { contadorModule } from './contador/contador.module';
import { dbzModule } from './dbz/dbz.module';
import { heroesModule } from './heroes/heroes.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    heroesModule,
    contadorModule,
    dbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
