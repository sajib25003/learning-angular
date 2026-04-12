import { Component, inject, signal } from '@angular/core';
import { IUser, UserService } from '../user';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  userService = inject(UserService);
  // users = toSignal<IUser[]>(this.userService.getUsers());
  reloadUsers = signal(0);

  users = toSignal(
    toObservable(this.reloadUsers).pipe(switchMap(() => this.userService.getUsers())),
    { initialValue: [] },
  );

  name = signal<string>('');
  email = signal<string>('');

  clearForm() {
    this.name.set('');
    this.email.set('');
  }

  submitForm() {
    const payload: IUser = {
      name: this.name(),
      email: this.email(),
    };

    this.userService.createUser(payload).subscribe(() => {
      this.reloadUsers.update((v) => v + 1);

      alert('User created successfully!');
      this.clearForm();
    });
  }

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
