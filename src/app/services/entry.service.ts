import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  constructor(private httpClient: HttpClient) { }

  getEntries(): Promise<any> {
    
    return this.httpClient.get("http://localhost:8080/entries").toPromise();
  }

}
