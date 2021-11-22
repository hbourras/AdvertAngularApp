import { Component, OnInit } from '@angular/core';
import { Civility } from '../civility';
import { Seller } from '../seller';

@Component({
  selector: 'app-seller-list',
  templateUrl: './seller-list.component.html',
  styleUrls: ['./seller-list.component.css']
})
export class SellerListComponent implements OnInit {

  public sellers : Seller[] = [];

  constructor() { 
    this.sellers = [{
      "id" : 1,
      "firstname" : "hamid",
      "lastname" : "Bourras",
      "birthDate" : Date.parse("1986-05-30"),
      "email" : "hamid_bourras@yahoo.FR",
      "civility": Civility.M
    }];
  }

  ngOnInit(): void {
  }

  

}
