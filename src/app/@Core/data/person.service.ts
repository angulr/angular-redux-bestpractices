import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PersonService {
    endpoint = 'localhost';

    constructor(private http: HttpClient) {
    }

    getMessages(userId: string): Observable<any[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        const endpoint = `${this.endpoint}/posts/${userId}`;
        return this.http.get<any[]>(endpoint, httpOptions);
    }

    postMessage(message): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        const endpoint = `${this.endpoint}/post`;
        return this.http.post<any>(endpoint, message, httpOptions);
    }

    getUsers(): Observable<any[]> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        const endpoint = `${this.endpoint}/users`;
        return this.http.get<any[]>(endpoint, httpOptions);
    }

    getProfile(id: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
        const endpoint = `${this.endpoint}/profile/${id}`;
        return this.http.get<any>(endpoint, httpOptions);
    }
}
