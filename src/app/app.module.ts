import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

// Firebase
import { AngularFireModule } from 'angularfire2';

import { MyApp } from './app.component';

// service
import { AuthService } from '../providers/auth-service';

// pages
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { DrillsPage } from '../pages/drills/drills';

// components
import { ListComponent } from '../components/list-component/list-component';
import { TilesComponent } from '../components/tiles-component/tiles-component';





// Firebase config settings
export const firebaseConfig = {
    apiKey: "AIzaSyCwXFVy3n5wUdOOX71g3LqlkkdN0tuthpc",
    authDomain: "practice-app-79e8d.firebaseapp.com",
    databaseURL: "https://practice-app-79e8d.firebaseio.com",
    projectId: "practice-app-79e8d",
    storageBucket: "practice-app-79e8d.appspot.com",
    messagingSenderId: "495692730199"
};



@NgModule({
  declarations: [
    MyApp,
    //pages
    HomePage,
    LoginPage,
    RegisterPage,
    DrillsPage,
    //components
    ListComponent,
    TilesComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [

      ]
    }),
     AngularFireModule.initializeApp(firebaseConfig) //initialize Firebase
  ],
  bootstrap: [
      IonicApp
  ],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    DrillsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService
  ]
})
export class AppModule {}
