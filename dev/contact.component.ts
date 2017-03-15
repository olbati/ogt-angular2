import {Component} from 'angular2/core';
import {Contact} from "./contact";
import {Router} from "angular2/router";

@Component({
    selector: 'contact',
    template: `
        <div>
          <div>
            <label for="name" >Name:</label>
            <input type="text" [(ngModel)]="contact.name" id="name" />
          </div>
          <div>
            <label for="age" >Age:</label>
            <input type="text" [(ngModel)]="contact.age" id="age" />
          </div>
          <div>
            <label for="phone" >Phone:</label>
            <input type="text" [(ngModel)]="contact.phone" id="phone" />
          </div>
         </div>
         <button (click)="createFrom()" >Create New From This</button>
    `,
    inputs:['contact'],
    styles:[`
      label {
        width: 100px;
        display: inline-block;
      }
      input {
        width: 250px;
      }
    `]
})

export class ContactComponent {
    public contact: Contact = null;

    constructor(private _router: Router){}

    createFrom(){
      this._router.navigate(['NewContact', {name: this.contact.name}]);
    }

}
