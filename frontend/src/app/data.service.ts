import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getParques() {
    return this.http.get('http://localhost:8080/wordpress/wp-json/wp/v2/posts/?categories=2&&per_page=100')
  }

  getFestas() {
    return this.http.get('http://localhost:8080/wordpress/wp-json/wp/v2/posts/?categories=6&&per_page=100')
  }

  getNav() {
    return this.http.get('http://localhost:8080/wordpress/wp-json/wp/v2/posts/?categories=5&&per_page=100')
  }

  getContato() {
    return this.http.get('http://localhost:8080/wordpress/wp-json/wp/v2/posts/?categories=7&&per_page=100')
  }
}
