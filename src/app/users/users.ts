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

  selectedUserId = signal<number | null>(null);

  submitForm() {
    const payload: IUser = {
      name: this.name(),
      email: this.email(),
    };

    const id = this.selectedUserId();

    if (id) {
      this.userService.updateUser(id, payload).subscribe({
        next: () => {
          alert('User updated successfully!');
          this.reloadUsers.update((v) => v + 1);
          this.clearForm();
          this.selectedUserId.set(null);
        },
        error: (err) => {
          console.log('Update error:', err);
          alert('Update failed!');
        },
      });
    } else {
      // create
      this.userService.createUser(payload).subscribe({
        next: () => {
          alert('User created successfully!');
          this.reloadUsers.update((v) => v + 1);
          this.clearForm();
        },
        error: () => {
          alert('Something went wrong!');
        },
      });
    }
  }

  updateForm(user: IUser) {
    this.selectedUserId.set(user.id!);
    this.name.set(user.name);
    this.email.set(user.email);
  }

  deleteUser(id: number | undefined) {
    if (!id) return;
    const confirmDelete = confirm('Are you sure?');

    if (!confirmDelete) return;

    this.userService.deleteUser(id).subscribe({
      next: () => {
        alert('User deleted successfully!');

        // 🔄 reload list
        this.reloadUsers.update((v) => v + 1);
      },
      error: (err) => {
        console.log('Delete error:', err);
        alert('Delete failed!');
      },
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
