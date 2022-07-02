import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home.component';

const components = [
  HomeComponent, 
  HeaderComponent, 
  ContentComponent, 
  FooterComponent
]

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [...components],
  providers: [],
  exports: [...components]
})
export class HomeModule {}
