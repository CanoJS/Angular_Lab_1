import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})

export class ApiService {

  url = "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) {}

  getCharacters(page:number=1){
    return this.http.get<any>(`${this.url}?page=${page}`);
  }

  searchCharacters(name:string){
    return this.http.get<any>(`${this.url}?name=${name}`);
  }

}