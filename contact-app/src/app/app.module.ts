import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component'
import { ContactListModule } from './contact-list'

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
    HttpClientModule,
    ContactListModule,
    RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
