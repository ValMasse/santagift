import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadeauFormComponent } from './pages/cadeau-form/cadeau-form.component';
import { CadeauxComponent } from './pages/cadeaux/cadeaux.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'giftForm', component: CadeauFormComponent},
  { path: 'listGifts', component: CadeauxComponent},
  { path: 'not-found', component: ErrorComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
