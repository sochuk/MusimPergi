import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

let apiUrl = 'http://api-musimpergi.iotanesia.com/public/';
let dateTime = Math.round((new Date()).getTime() / 1000).toString();
@Injectable()
export class AuthService {

  constructor(public http : Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      let headers = new Headers({'APIKey':'EMONEV','Timestamp': dateTime,'Content-Type':'application/json'});

      this.http.post(apiUrl+'auth/' + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
  public logOut() {
    localStorage.setItem("userData", null);
  }
}
