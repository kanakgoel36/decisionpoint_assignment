import { Component } from '@angular/core';
import { User } from './user';
import { DataService } from './data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  user:User[]
  constructor(
    private dataService: DataService
  ) {
    
  }
  

}
