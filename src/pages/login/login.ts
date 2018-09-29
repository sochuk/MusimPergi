import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  responseData : any;
  userData = {"username": "","password": ""};
 // userDetails : any;
  constructor(public navCtrl: NavController, public authService:AuthService, private toastCtrl: ToastController ) {
  }

  login(){
    if(this.userData.username=="" || this.userData.password == "")
    {
      this.showToastNullUserNameOrPassword();
    }else
    {
      this.authService.postData(this.userData,'login').then((result) => {
      this.responseData = result;
      console.log(this.userData);
      console.log(this.responseData);
      // this.responNyas = JSON.stringify(this.responseData);
      // this.responNya = JSON.parse(this.responNyas);
       if(this.responseData.meta.error == "0"){
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      
      //this.userDetails = JSON.parse(this.responseData);;
      console.log(this.responseData.data.user.full_name);
      //this.navCtrl.push(HomePage);
       this.navCtrl.setRoot(TabsPage);
       }
       else{ this.showToastWrongUserNameOrPassword(); }  }, (err) => {
        // Error log
      });
      }
    

  }
  

  showToastWrongUserNameOrPassword() {
    let toast = this.toastCtrl.create({
      message: 'Kesalahan Username Atau Password',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
  showToastNullUserNameOrPassword() {
    let toast = this.toastCtrl.create({
      message: 'Username / password harus diisi',
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
