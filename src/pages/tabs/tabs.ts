import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: any;
  tab2Root: any;
  tab3Root: any;
  variable: any;
 
  constructor(navParams: NavParams, public navCtrl : NavController) {
    
    // let status = JSON.parse(localStorage.getItem('userData'));
    // if (status != null) {
    //     this.variable = true;
    // }else if(status == null){
    //     this.variable = false;
    // }
    // console.log("STATUS LOGI : "+ this.ionViewDidLoad());

    // this.tab3Root = this.ionViewDidLoad()?ContactPage:LoginPage;
    this.tab3Root = LoginPage;
    this.tab1Root = HomePage;
    this.tab2Root = AboutPage;
  }
  
  // ionViewDidLoad() {
    // return this.variable = false;
    // //check apakah sudah dalam kondisi login?
    // let status = JSON.parse(localStorage.getItem('userData'));
    // if (status != null) {
    //   this.variable = true;
    // }else 
    //   {
    //     this.variable = false;
    //   }
   
    // }
}
 

