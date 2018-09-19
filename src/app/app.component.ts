import { LifePage } from './../pages/life/life';
import { AuthService } from './auth.service';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from './../pages/login/login';
import { TabsPage } from '../pages/tabs/tabs';
import { Intro } from '../pages/intro/intro';
 

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage ;

  constructor(authService: AuthService, platform: Platform,
     statusBar: StatusBar, splashScreen: SplashScreen) {
    if (authService.isLoggedIn) {
       this.rootPage = TabsPage;
    } else {
      this.rootPage = LoginPage;
    }
   
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
