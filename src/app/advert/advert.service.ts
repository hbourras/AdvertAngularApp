import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Advert } from './advert';

@Injectable({
  providedIn: 'root'
})
export class AdvertService {
  private static baseURL : string = "http://127.0.0.1:8080/petites-annonces/api/v1";

  constructor(private httpClient:HttpClient) { }

  public getAdvertList() : Observable<Advert[]> {
    let url = AdvertService.baseURL.concat("/adverts");
    console.log("url", url);
    return this.httpClient.get<Advert[]>(AdvertService.baseURL.concat("/adverts"));
  }
}
