import {Component} from 'angular2/core';
import {ContactListComponent} from './contact-list.component'
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {NewContactComponent} from "./new-contact.component";

@Component({
    selector: 'my-app',
    template: `
        <header>
          <nav>
            <a [routerLink]="['Contacts']" >Contact List</a>
            <a [routerLink]="['NewContact']" >New Contact</a>
          </nav>
        </header>
        <router-outlet></router-outlet>
    `,
    directives: [ContactListComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
  {path: '/contacts', name: 'Contacts', component: ContactListComponent, useAsDefault: true},
  {path: '/newcontact', name: 'NewContact', component: NewContactComponent},
  {path: '/newcontact/:name', name: 'NewContactFrom', component: NewContactComponent}
])


export class AppComponent {

}
