import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Url } from 'url';


export interface Store {
  id: string;
  name: string;
  categoryType: string;
  groups: any[];
  totalPages: number;
  categories: [];
}
export interface Image{
  size: string;
  meta: string;
  alt: string;
  rel: string;
  width: number;
  href: Url;
  height: number;
}
export interface Group {
  id: string;
  name: string;
  links: Url[];
  priceRange: {
    regular: {
      high: number;
      low: number;
    }
    selling: {
      high: number;
      low: number;
    }
  };
  thumbnail: Image;
  images: Image[];
  reviews: {
    recommendationCount: number;
    likelihood: number;
    reviewCount: number;
    averageRating: number;
    id: string;
    type: string;
  } 
}
@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }
  getStoreData() {
    return this.http.get('assets/store-data.json')
    .toPromise()
    .then(res => res as Store)
    .then(data => {
      console.log('data here ', data);
      return data;
    })
  }
}
