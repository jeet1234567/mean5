import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  users=[
  {name:'Jitender',
   email:'jitender@gmail.com',
   address:'ghaziabad',
   phone:'1111111111'},
  {name:'Bob',
  email:'bob@gmail.com',
  address:'noida',
  phone:'2222222222'},
  {name: 'Alice',
  email:'alice@gmail.com',
  address:'delhi',
  phone:'3333333333'}]

  constructor() { }

  ngOnInit() {
  }

}
