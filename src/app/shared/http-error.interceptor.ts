import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { IfStmt } from "@angular/compiler";
import { Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators';
import { SweetAlert } from "./sweet-alert";

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((httpErrorResponse) => {
      var erro = httpErrorResponse.error;
      SweetAlert.exibirErro(erro.message)
/*       if(erro.erros != null && erro.erros.length > 0 ){
        erro.erros.forEach(erro => {
          SweetAlert.exibirErro(erro)
        });
      } */
      return throwError(httpErrorResponse.error)
    }))
  }
}