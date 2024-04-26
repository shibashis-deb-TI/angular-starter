import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { ContactListModule } from './contact-list'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: 'contacts',
    loadComponent: () =>
      import('./contact-list/contact-list.module').then(
        (mod) => mod.ContactListModule,
      ),
  },
  { path: '', pathMatch: 'full', redirectTo: 'contact-list' },
  { path: '**', pathMatch: 'full', redirectTo: 'contact-list' },
]
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ContactListModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
