import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IUser {
  id?: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  createUser(user: IUser): Observable<IUser> {
    return this.http.post<IUser>(this.apiUrl, user);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this.apiUrl);
  }

  updateUser(id: number, user: IUser): Observable<IUser> {
    return this.http.put<IUser>(`${this.apiUrl}/${id}`, user);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
