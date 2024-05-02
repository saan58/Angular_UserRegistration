import { Component } from '@angular/core';

@Component({
  selector: 'app-showuser',
  templateUrl: './showuser.component.html',
  styleUrl: './showuser.component.css'
})
export class ShowuserComponent {


  users: any[] = [];

  constructor() {}

  ngOnInit() {
      // Fetch user data from local storage
      const userData = localStorage.getItem('users');
      if (userData) {
          // Parse the user data from JSON string
          this.users = JSON.parse(userData);
      }
  }

}
