import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MatButtonModule} from "@angular/material/button";
import {NgxDropzoneModule} from 'ngx-dropzone';
import {MatSelectModule} from '@angular/material/select';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './home/home.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {IonicModule} from '@ionic/angular';
import { LandingComponent } from './landing/landing.component';
import {WizardComponent} from './wizard/wizard.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    WizardComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    IonicModule,
    AppRoutingModule,
    CdkStepperModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxDropzoneModule,
    FlexLayoutModule,

    MatButtonModule,
    MatStepperModule,
    MatGridListModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatInputModule,
    MatIconModule,
    MatTabsModule,
    MatSidenavModule,
    MatBadgeModule,
    MatMenuModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    FlexLayoutModule,
    FontAwesomeModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AppComponent],
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http)
}
