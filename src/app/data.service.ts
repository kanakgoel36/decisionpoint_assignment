import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  searchOption=[]
  public usersData: User[]
  userUrl : string = "https://jsonplaceholder.typicode.com/users"; 

  constructor(
    private http: HttpClient
  ) { }


  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.userUrl);
    
  }

  filteredListOptions() {
    let users = this.usersData;
        let filteredUsersList = [];
        for (let user of users) {
            for (let options of this.searchOption) {
                if (options.name === user.name) {
                  filteredUsersList.push(user);
                }
            }
        }
        console.log(filteredUsersList);
        return filteredUsersList;
  }
}
