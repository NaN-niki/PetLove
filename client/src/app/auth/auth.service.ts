import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfces';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$$ = new BehaviorSubject<IUser | undefined>(undefined);
  public user$ = this.user$$.asObservable();

  user: IUser | undefined;

  get isLogged(): boolean {
    return !!this.user;
  }

  subscription: Subscription;

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    });
  }
  
  login(username: string, password: string) {
    return this.http.post<IUser>('/api/auth/login', { username, password })
      .pipe(tap(user => {
        this.user$$.next(user)
      }))
  }

  register(username: string, firstName: string, lastName: string, email: string, password: string) {
    return this.http.post<IUser>('/api/auth/register', { username, firstName, lastName, email, password })
    .pipe(tap(user => {
      this.user$$.next(user)
    }))
  }

  logout() {
    return this.http.get<void>('/api/auth/logout')
    .pipe(tap(() => {
      this.user$$.next(undefined)
    }))
  }

  getProfileInfo() {
    return this.http.get<IUser>('/api/auth/getUser')
    .pipe(tap(user => {
      this.user$$.next(user)
    }))
  }

  editProfileInfo(firstName: string, lastName: string, email: string,username: string) {
    return this.http.put<IUser>('/api/auth/profile/edit', { firstName, lastName, email, username })
    .pipe(tap(user => {
      this.user$$.next(user)
    }))
  }
}
