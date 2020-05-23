import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { User } from '../../user';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  user: User[]
  constructor(
    private dataService: DataService
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      this.user = users
      this.dataService.usersData = users
    });
  }

  onSelectedOption(e) {
    this.getFilteredExpenseList();
  }

  getPost(id):Observable<User[]>{
    console.log(User);
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/posts?userid="+id);
    
  }

  getFilteredExpenseList() {
    if (this.dataService.searchOption.length > 0)
      this.user = this.dataService.filteredListOptions();
    else {
      this.user = this.dataService.usersData;
    }

    console.log(this.user)
  }

}
