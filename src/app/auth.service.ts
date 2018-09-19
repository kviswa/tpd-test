import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class AuthService {

    username = localStorage.getItem('un'); ; 
    token = localStorage.getItem('token');

    private apiUrl = 'http://localhost:80';
    //private apiUrl = 'http://www.thepeopledaily.com';
    private jsonContent = new RequestOptions({
        headers: new Headers ({ 
               //'Content-Type': 'application/json'
               'Content-Type': 'application/x-www-form-urlencoded',

        })
    });

    constructor(private http: Http) {  }

    get isLoggedIn() {
        return this.token !== null;
    }

    authenticate(username: string, password: string) : Promise<void> {
        // POST /token
        const json = JSON.stringify({
            username: username,
            password: password
        });
        console.log(json);
        return this.http.post(`${this.apiUrl}/server/token/`, json, this.jsonContent)
        .toPromise()
        .then(response => {
            this.token = response.json().token;
            this.username = username; 
            console.log("Token: ",this.token);
            localStorage.setItem('token', this.token);
            localStorage.setItem('un', this.username);   
            
             });
    }
}