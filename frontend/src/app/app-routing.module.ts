import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParquesComponent } from './parques/parques.component'
import { FestasComponent } from './festas/festas.component'
import { HomeComponent } from './home/home.component'
import { ContatoComponent } from './contato/contato.component'

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'parques', component: ParquesComponent },
  { path: 'festas', component: FestasComponent },
  { path: 'contato', component: ContatoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
