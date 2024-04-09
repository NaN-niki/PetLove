import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfces';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';
import { environment } from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl : string = environment.apiUrl + "/auth"

  user: IUser | null = null
  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined)
  user$ = this.user$$.asObservable().pipe(filter((val): val is IUser | null => val !== undefined))

  subscription: Subscription 

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe(user => {
      this.user = user
    })
  }
  login(username: string, password: string) {
    return this.http.post<IUser>(this.apiUrl + '/login', { username, password })
      .pipe(tap(user => {
        this.user$$.next(user)
      }))
  }

  register(username: string, firstName: string, lastName: string, email: string, password: string) {
    return this.http.post<IUser>(this.apiUrl + '/register', { username, firstName, lastName, email, password }).pipe(tap(user => {
      this.user$$.next(user)
    }))
  }

  logout() {
    return this.http.get<void>( this.apiUrl + '/logout').pipe(tap(() => {
      this.user$$.next(null)
    }))
  }

  getProfileInfo() {
    return this.http.get<IUser>(this.apiUrl + '/getUser').pipe(tap(user => {
      this.user$$.next(user)
    }))
  }

  // login(username: string, password: string) {
  //   return this.http.post<IUser>('/api/auth/login', { username, password })
  //     .pipe(tap(user => {
  //       this.user$$.next(user)
  //     }))
  // }

  // register(username: string, firstName: string, lastName: string, email: string, password: string) {
  //   return this.http.post<IUser>('/api/auth/register', { username, firstName, lastName, email, password }).pipe(tap(user => {
  //     this.user$$.next(user)
  //   }))
  // }

  // logout() {
  //   return this.http.get<void>('/api/auth/logout').pipe(tap(() => {
  //     this.user$$.next(null)
  //   }))
  // }

  // getProfileInfo() {
  //   return this.http.get<IUser>('/api/auth/getUser').pipe(tap(user => {
  //     this.user$$.next(user)
  //   }))
  // }
}
