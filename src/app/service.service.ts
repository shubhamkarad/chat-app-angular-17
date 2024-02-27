import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private API_URL: any = 'http://localhost:5000';
  sharedDataSubject = new BehaviorSubject<any>(null);
  sharedData$ = this.sharedDataSubject.asObservable();
  // sharedData = signal<any>('');
  constructor(private http: HttpClient) {}

  sendData(data: any) {
    console.log(data, 'Data');
    this.sharedDataSubject.next(data);
  }

  login(data: any): Observable<any> {
    const headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post<any>(`${this.API_URL}/login`, data, { headers });
  }
}
