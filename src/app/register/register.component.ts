import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registrationData: any = {};

    constructor(private router: Router) {}

    onSubmit() {
        // Get existing users from local storage or initialize an empty array
        let users = JSON.parse(localStorage.getItem('users') || '[]');

        // Append new user to the array
        users.push(this.registrationData);

        // Save updated user array to local storage
        localStorage.setItem('users', JSON.stringify(users));

        // Redirect to login page after registration
        this.router.navigate(['/login']);
    }
}
