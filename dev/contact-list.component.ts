import {Component} from "angular2/core";
import {OnInit} from 'angular2/core';
import {ContactComponent} from './contact.component'
import {ContactService} from "./contact.service";
import {Contact} from "./contact";

@Component({
    selector: 'contact-list',
    template: `
        <ul>
            <li *ngFor="#contact of contacts" 
            (click)="onSelect(contact)"
            [class.isclicked]="selectedContact === contact">{{contact.name}}</li>
        </ul>
        <contact *ngIf="selectedContact !== null" [contact]="selectedContact" ></contact>  
    `,
    directives: [ContactComponent],
    providers: [ContactService],
    styleUrls: ['../src/css/contact-list.css']
})


export class ContactListComponent implements OnInit {

  public contacts: Contact[];

    public selectedContact = null;

    constructor(private _contactService: ContactService){

    }

    getContacts(){
      this._contactService.getContacts().subscribe(
        data => this.contacts = data, error => alert(error), () => console.log(this.contacts));
    }

    ngOnInit():any{
      this.getContacts();
    }

    onSelect(contact){
        this.selectedContact = contact
    }

}
