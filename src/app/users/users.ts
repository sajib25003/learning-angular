import { Component, inject, signal } from '@angular/core';
import { IUser, UserService } from '../user';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userService = inject(UserService);
  users = toSignal<IUser[]>(this.userService.getUsers());

  // users = signal<any[]>([]);

  // constructor(private userService: UserService) {}

  // ngOnInit() {
  //   this.userService.getUsers().subscribe((data: any) => {
  //     // console.log(data);
  //     this.users.set(data);
  //     console.log('users:', this.users);
  //   });
  // }
}
