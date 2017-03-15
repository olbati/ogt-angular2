import {Injectable} from 'angular2/core'
import {Contact} from "./contact";
import {Http, Headers, RequestOptions} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ContactService {

  constructor(private _http: Http){}

  getContacts(){
    return this._http.get('http://localhost:3010/').map(res => res.json());
  }

  insertContact(contact: Contact){
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this._http.post('http://localhost:3010/contact', JSON.stringify(contact), options);
  }

}
