import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListFilesComponent } from './list-files/list-files.component';
import { HttpClientModule } from '@angular/common/http';
import { ListFilesService } from './list-files/list-files.service';

@NgModule({
  declarations: [
    AppComponent,
    ListFilesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ListFilesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
