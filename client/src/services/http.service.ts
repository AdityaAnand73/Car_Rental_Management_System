import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment.development';
import { AuthService } from './auth.service';
 
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private serverName = environment.apiUrl;
 
  constructor(private http: HttpClient, private authService: AuthService) {}
 
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.authService.getToken()}`
    });
  }
 
  getAllCategories(): Observable<any> {
    return this.http.get(`${this.serverName}/api/administrator/car-categories`, { headers: this.getHeaders() });
  }
 
  getBookingByAgent(): Observable<any> {
    return this.http.get(`${this.serverName}/api/agent/bookings`, { headers: this.getHeaders() });
  }
 
  paymentReport(): Observable<any> {
    return this.http.get(`${this.serverName}/api/administrator/reports/payments`, { headers: this.getHeaders() });
  }
 
  getBookingReport(): Observable<any> {
    return this.http.get(`${this.serverName}/api/administrator/reports/bookings`, { headers: this.getHeaders() });
  }
 
  getCars(): Observable<any> {
    return this.http.get(`${this.serverName}/api/customers/cars/available`, { headers: this.getHeaders() });
  }
 
  bookACar(details: any, userId: number, carId: number): Observable<any> {
    return this.http.post(`${this.serverName}/api/customers/booking?userId=${userId}&carId=${carId}`, details, { headers: this.getHeaders() });
  }
 
  bookingPayment(details: any, bookingId: number): Observable<any> {
    return this.http.post(`${this.serverName}/api/agent/payment/${bookingId}`, details, { headers: this.getHeaders() });
  }
 
  updateBookingStatus(bookingId: number): Observable<any> {
    return this.http.put(`${this.serverName}/api/agent/bookings/${bookingId}/status?status=booked`, {}, { headers: this.getHeaders() });
  }
 
  updateCar(details: any, updateId: number): Observable<any> {
    return this.http.put(`${this.serverName}/api/agent/car/${updateId}`, details, { headers: this.getHeaders() });
  }
 
  createCar(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/agent/car`, details, { headers: this.getHeaders() });
  }
 
  createCategory(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/administrator/car-categories`, details, { headers: this.getHeaders() });
  }
 
  updateCategory(details: any, updateId: number): Observable<any> {
    return this.http.put(`${this.serverName}/api/administrator/car-categories/${updateId}`, details, { headers: this.getHeaders() });
  }
 
  Login(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/user/login`, details, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
 
  registerUser(details: any): Observable<any> {
    return this.http.post(`${this.serverName}/api/user/register`, details, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }
}