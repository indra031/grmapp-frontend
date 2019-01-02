import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class HomePlmnService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get<HomePlmn[]>('http://localhost:8080/homeplmn');
  }
}

export class HomePlmn {
  constructor(
    plmnCode: string,
    servingBid: number,
    utcOffset: number,
    iac1: string,
    cc1: string,
    plmnDescription: string) { }
}
