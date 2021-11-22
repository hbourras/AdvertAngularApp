import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Advert } from '../advert';
import { AdvertService } from '../advert.service';

@Component({
  selector: 'app-advert-list',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  public adverts: Advert[] = [];

  constructor(private advertService : AdvertService) { }

  ngOnInit(): void {
    this.getAdverts();
   /*this.adverts = [{
      "id" : 10,
      "title": "Annonce 1",
      "description" : "Description en cours",
      "price" : 10.55,
      "creationDate" : Date.now()
    }]*/
  }

  private getAdverts() {
    this.advertService.getAdvertList().subscribe(
      (data) => {
        console.log("data", data);
        this.adverts = data;
      }, 
      (error) => {
        window.alert(error.message);
      })
  }

}
