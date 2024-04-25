import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactListModule } from './contact-list/contact-list.module';
import { RouterModule } from '@angular/router';
import { ContactListComponent } from './contact-list/components/contact-list/contact-list.component';

const routes = [{ path: '', component: ContactListComponent }];
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactListModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
