import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlList } from './modal';

@Injectable({
  providedIn: 'root'
})
export class ShortnerService {

  constructor(private http:HttpClient) { }

  saveURL(urlDetails: UrlList) {
    return this.http.post(`https://616d55aa37f997001745d9c2.mockapi.io/url`,urlDetails);
  }

  getURLByID(urlId:number) {
    return this.http.get<Array<UrlList>>(`https://616d55aa37f997001745d9c2.mockapi.io/url/${urlId}`);
  }

  getAllURLList() {
    return this.http.get<Array<UrlList>>(`https://616d55aa37f997001745d9c2.mockapi.io/url`);
  }

  updateURLById(urlId:number,urlData:UrlList) {
    return this.http.put(`https://616d55aa37f997001745d9c2.mockapi.io/url/${urlId}`,urlData);
  }

  deleteURLById(urlId:number) {
    return this.http.delete(`https://616d55aa37f997001745d9c2.mockapi.io/url/${urlId}`);
  }
}
