import { AuthService } from './auth.service';
import  uuidV4  from 'uuid/v4';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable, Observer } from 'rxjs';
import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';
import { List } from './list.model';

@Injectable()
export class ListService {
  
  private apiUrl = 'http://localhost:80';
  //private apiUrl = 'http://www.thepeopledaily.com';
 
    constructor(private http: Http, private authservice: AuthService) {}

    updateMessasge(msg: string): Promise<any> {
      const json = JSON.stringify({ message: msg });
      console.log("updateMessasge(): ", json);
      return this.http.put(`${this.apiUrl}/server/token/`, json, this.requestOptions(true))
        .toPromise();
    }

    addList(list: List):Promise<any> {
      list.id = uuidV4();
      const json = JSON.stringify(list);
      console.log("addList(): ", json);
      return this.http.post(`${this.apiUrl}/server/dreams/`, json, this.requestOptions(true))
      .toPromise();
    }

    getList (ListId: number) : Promise<List> {
      return this.http.get(`${this.apiUrl}/server/dreams/?id=${ListId}`,this.requestOptions())
      .toPromise()
      .then(  response =>  response.json());
    }

    getAllList(): Promise<List[]> {
      return this.http.get(`${this.apiUrl}/server/dreams/`,this.requestOptions())
      .toPromise()
      .then( response => response.json())
      .catch( (error) => console.log("GetAllFailed: ", error));
      
    }

    updateList(list: List ): Promise<any> {
      const json = JSON.stringify(list);
      console.log("updateList(): ", json);
      return this.http.put(`${this.apiUrl}/server/dreams/?id=${list.id}`, json, this.requestOptions(true))
        .toPromise();
    }

     removeList(ListId: number): Promise<any> {
      return this.http.delete(`${this.apiUrl}/server/dreams/?id=${ListId}`,this.requestOptions())
      .toPromise();
     }

     private requestOptions(hasBody=false) {

        const headers = new Headers({ 
              //'Authorization': 'Bearer ' + this.authservice.token,
              
        });
        if (hasBody) {
          headers.set('Content-Type', 'application/x-www-form-urlencoded');
        }
        return new RequestOptions({headers: headers});
      
     };
    
  }//class