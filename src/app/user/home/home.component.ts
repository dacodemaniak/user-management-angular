import { Component } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { take } from 'rxjs';
import { UserType } from '../../types/user-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public users: Array<UserType> = []

  constructor(
    private service: UserService
  ) {}

  ngOnInit(): void {
    this.service.findAll()
      .pipe(
        take(1) // Get the first emit then close subscription
      )
      .subscribe({
        next: (users: Array<UserType>) => {
          // Your logic goes here
          this.users = users
        },
        error: (error) => {
          // Deal with error as you want
        },
        complete: () => {
          // Just nothing special... emission was completed
        }
      })
  }
}
