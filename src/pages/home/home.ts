import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service/auth-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  postData : any;
  constructor(public navCtrl: NavController, public authService:AuthService) {
    let status = JSON.parse(localStorage.getItem('userData'));
    if (status != null) {
    this.postData = JSON.parse(localStorage.getItem('userData'));
  }else if(status == null){
    this.postData = null;
  }
}

}
