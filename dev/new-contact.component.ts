import {Component, OnInit} from 'angular2/core';
import {ContactService} from "./contact.service";
import {Router, RouteParams} from "angular2/router";
import {Contact} from "./contact";

@Component({
  template: `
        <form #myForm="ngForm" (submit)="onSubmit()">
          <div>
            <label for="name" >Name:</label>
            <input type="text" id="name"
              [(ngModel)]="newContact.name"
              ngControl="name"
              required 
             />
          </div>
          <div>
            <label for="age" >Age:</label>
            <input type="text" id="age" 
              [(ngModel)]="newContact.age"
              ngControl="age"
              required
            />
          </div>
          <div>
            <label for="car" >Phone:</label>
            <input type="text" id="phone" 
            [(ngModel)]="newContact.phone"
            ngControl="car"
            required
            />
          </div>
          <button [disabled]="!myForm.form.valid"  type="submit">Create Contact</button>
         </form>
    `,
  styles:[`
      label {
        width: 100px;
        display: inline-block;
      }
      input {
        width: 250px;
      }
  `],
  providers: [ContactService]
})

export class NewContactComponent implements OnInit{

  newContact: Contact;

  constructor(private _contactService: ContactService, private _router : Router, private _routeParams: RouteParams){}

  onSubmit(){
    this._contactService.insertContact(this.newContact).subscribe(
      data => this._router.navigate(['Contacts']), error => alert(error), () => console.log('done !'));

  }

  ngOnInit():any {
    this.newContact = {name: this._routeParams.get('name'), age: '', phone: ''};
  }
}
