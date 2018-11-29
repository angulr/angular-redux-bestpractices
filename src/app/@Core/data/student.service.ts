import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
    endpoint = 'http://localhost:5000/api';
    const httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    };

    constructor(private http: HttpClient) {
    }

    getStudent(id): Observable<any[]> {
        const endpoint = `${this.endpoint}/student/${id}`;
        return this.http.get<any[]>(endpoint, this.httpOptions);
    }

    getStudents(): Observable<any[]> {
        const endpoint = `${this.endpoint}/student`;
        return this.http.get<any[]>(endpoint, this.httpOptions);
    }

    addStudent(message): Observable<any> {
        const endpoint = `${this.endpoint}/student`;
        return this.http.post<any>(endpoint, message, this.httpOptions);
    }

    updateStudent(message, id): Observable<any> {
        const endpoint = `${this.endpoint}/student/${id}`;
        return this.http.patch<any>(endpoint, message, this.httpOptions);
    }

    deleteStudent(id): Observable<any[]> {
        const endpoint = `${this.endpoint}/student/${id}`;
        return this.http.delete<any[]>(endpoint, this.httpOptions);
    }
}
