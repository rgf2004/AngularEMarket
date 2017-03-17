import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';

import { AppComponent }         from './app.component';

import { NavModule }            from './nav/nav.module';
import { SideMenuModule }       from './side-menu/side-menu.module';
import { ContentDivModule}      from './content-div/content-div.module';
import { FooterModule }         from './footer/footer.module';

import { routing }              from './app.routing';

@NgModule({
  imports:      [ 
                  BrowserModule,                 
                  NavModule,
                  SideMenuModule,
                  ContentDivModule,
                  FooterModule
                 ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
