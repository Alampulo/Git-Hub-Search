import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private name:string;
    
    private ID = "6051dcf4774275c44572";
    private Secret = "e9e1ab7639bb901db78db37f3762a75ee1fff356"
    constructor(private http:Http) {
    
    
  }
  getUsername(){
    return this.http.get("https://api.github.com/users/" + this.name + "?client_id=" +
     this.ID + "&client_secret=" + this.Secret).pipe(map(res => res.json()))
  }
  getRepos(){
    return this.http.get("https://api.github.com/users/" + this.name + "/repos?client_id=" +
     this.ID + "&client_secret=" + this.Secret).pipe(map(res => res.json()))
  }
  updateUsername(name:string){
    this.name=name;
  }
  }
  
