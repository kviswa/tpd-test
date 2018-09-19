import { LifePage } from './../life/life';
import { AuthService } from '../../app/auth.service';
import { Component } from '@angular/core';
import { NavController  } from 'ionic-angular';
 
 

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username = '';
  password = '';

  constructor(private authService: AuthService, private navCtrl: NavController) {
  }

  login()
  {
      console.log("User: ", this.username);
       
      this.authService.authenticate(this.username, this.password)
        .then(() => this.navCtrl.setRoot(LifePage))
        .catch( error => console.warn("login failed: ", error));
  
  }
}
