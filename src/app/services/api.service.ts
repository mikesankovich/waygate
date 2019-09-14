import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {};

  get(url, chapter, sub): any {
    return this.http.get(`${url}?chapter=${chapter}&sub=${sub}`);
  }
}
