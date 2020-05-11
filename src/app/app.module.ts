import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinglePageComponent } from './layouts/single-page/single-page.component';
import { PlansModule } from './pages/single-page-pages/plans/plans.module';
import { ChooseUsComponent } from './pages/single-page-pages/choose-us/choose-us.component';
import { ContactComponent } from './pages/single-page-pages/contact/contact.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { OurServicesComponent } from './pages/single-page-pages/our-services/our-services.component';
import * as Hammer from 'hammerjs';
  import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

  export class HammerConfig extends HammerGestureConfig {
    overrides = {
      pan: {
          direction: 6
      },
      pinch: {
          enable: false
      },
      rotate: {
          enable: false
      }
  };
  }

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    ChooseUsComponent,
    ContactComponent,
    FooterComponent,
    NavbarComponent,
    OurServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlansModule,
    HammerModule,
    NgbModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
