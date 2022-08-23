import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root'})
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(userName: string, password: String) {
        // TODO Implement it
    }

    logout() {
        // TODO Implement it
    }

    register() {

    }

    listUsers() {}

}
