import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { ContactListModule } from './contact-list/contact-list.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
