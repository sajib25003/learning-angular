import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<IUser[]>(this.apiUrl);
  }
}
