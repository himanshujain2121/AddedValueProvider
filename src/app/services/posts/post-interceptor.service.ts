import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler,HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PostInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    if(req.method === 'POST'){
      let request = req.clone( { headers : new HttpHeaders()
      .set('authKey','fsdfjdgsf435345hjk')
      .set('authpwd','fdsfdsf') });
      return next.handle(request);
    }
    return next.handle(req);
  }
}
