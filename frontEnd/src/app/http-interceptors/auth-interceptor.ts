import { Injectable } from '@angular/core';
// import {
//   HttpEvent,
//   HttpInterceptor,
//   HttpHandler,
//   HttpRequest,
//   HttpErrorResponse,
// } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AccountService } from './../account/shared/account.service';
// import { throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
  // constructor(private accountService: AccountService) {}

  // intercept(req: HttpRequest<any>, next: HttpHandler) {
  //   const token = this.accountService.getAuthorizationToken();
  //   let request: HttpRequest<any> = req;

  //   if (token) {
  //     request = req.clone({
  //       headers: req.headers.set('Authorization', `Bearer ${token}`),
  //     });
  //   }
  //   //retorna o request com o erro tratado
  //   return next.handle(request).pipe(catchError(this.handleError));
  // }

  // private handleError(error: HttpErrorResponse) {
  //   if (error.error instanceof ErrorEvent) {
  //     //erro de client-side ou de rede
  //     console.error('ocorreu um erro: ', error.error.message);
  //   } else {
  //     //erro retornado pelo back
  //     console.error(
  //       `Código do erro ${error.status}, ` +
  //         `Erro: ${JSON.stringify(error.error)}`
  //     );
  //   }
  //   //retornar um observable com uma mensagem amigavel
  //   return throwError('Ocorreu um erro, tente novamente');
  // }
//}
