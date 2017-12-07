import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class HubspotService {

	username = 'tyler.prete@shopify.com';

  constructor(public http:Http) { }

  getCompaniesByDomain(){
    return new Promise((resolve,reject) => {
      this.http.get("https://").map(res => res.json()).toPromise()
      .then(res => {
      	resolve(res);
      }).catch(err => reject(err));
    })
  }

  authenticateUser(){
    return new Promise((resolve,reject) => {
      this.http.get("https://").map(res => res.json()).toPromise()
      .then(res => {

      }).catch(err => reject(err));
    })
  }

}
