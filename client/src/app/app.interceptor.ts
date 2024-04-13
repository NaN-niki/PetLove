import { HTTP_INTERCEPTORS, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core"
import { Observable, catchError, throwError } from "rxjs";
import { environment } from 'src/environments/environment.development'
import { ErrorService } from "./error.service";

const apiUrl = environment.apiUrl

@Injectable() 
export class AppInterceptor implements HttpInterceptor {
    constructor(private errorService: ErrorService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.url.startsWith('/api')) {
            req = req.clone({
                url: req.url.replace('/api', apiUrl),
                withCredentials: true
            })
        }

        return next.handle(req)
            .pipe(
                catchError((err) => {
                    this.errorService.setError(err)
                    //return throwError(() => err);
                    return[err]
                })
            )
    }

}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true 
}