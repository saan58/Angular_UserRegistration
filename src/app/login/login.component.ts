// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginData: any = {};
    users: any[] = [];

    constructor(private router: Router) {}

    ngOnInit() {
        // Fetch user data from local storage
        const userData = localStorage.getItem('users');
        if (userData) {
            // Parse the user data from JSON string
            this.users = JSON.parse(userData);
        }
    }

    onSubmit() {
        // Find the user with the entered username
        const user = this.users.find(u => u.username === this.loginData.username);

        // Check if user exists and the password matches
        if (user && user.password === this.loginData.password) {
            // Redirect to user list page after successful login
            this.router.navigate(['/user-list']);
        } else {
            // Handle incorrect credentials
            alert('Invalid username or password');
        }
    }
}
