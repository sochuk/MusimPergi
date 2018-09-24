import { Component } from '@angular/core';
import { NavController, Tab } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TabsPage } from '../tabs/tabs';
import { AuthService } from '../../providers/auth-service/auth-service';
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, public auth: AuthService) {

  }

  logout() {
    this.auth.logOut()
    this.navCtrl.setRoot(LoginPage)
  }
}
