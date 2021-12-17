import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadeauxComponent } from './pages/cadeaux/cadeaux.component';
import { CadeauCardComponent } from './components/cadeau-card/cadeau-card.component';
import { CadeauListComponent } from './components/cadeau-list/cadeau-list.component';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadeauFormComponent } from './pages/cadeau-form/cadeau-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CadeauxComponent,
    CadeauCardComponent,
    CadeauListComponent,
    FooterComponent,
    HeaderComponent,
    ErrorComponent,
    HomeComponent,
    CadeauFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
