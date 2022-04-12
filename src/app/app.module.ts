import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnixStampComponent } from './unix-stamp/unix-stamp.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, UnixStampComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
