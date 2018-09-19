import { AddPage } from './../pages/add/add';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BragPage } from '../pages/brag/brag';
import { LifePage } from '../pages/life/life';
import { DetailPage } from '../pages/detail/detail';
import { ProfilePage } from '../pages/profile/profile';
import { WorkPage } from '../pages/work/work';
import { TabsPage } from '../pages/tabs/tabs';
import { Intro } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { ListService} from './list.service';
import { AuthService} from './auth.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule 
  ],
  declarations: [
    MyApp,
    BragPage,
    LifePage,
    ProfilePage,
    WorkPage,
    TabsPage,
    Intro,
    LoginPage,
    DetailPage,
    AddPage
  ],

  entryComponents: [
    MyApp,
    BragPage,
    LifePage,
    ProfilePage,
    WorkPage,
    TabsPage,
    Intro,
    LoginPage,
    DetailPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  bootstrap: [IonicApp]
})
export class AppModule {}
