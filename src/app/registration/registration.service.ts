import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from  'rxjs/operators';
import { Observable } from  'rxjs';


const registerUserURL = 'http://localhost:3000/registerUser';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  public resultValue:string="";

  constructor(private httpclient: HttpClient) { }

  register(user:any): Observable<any> {
    return this.httpclient.post<any>(registerUserURL, user).pipe(
      tap((res:any) =>{

          console.log(res)

      })
    )
  }

}
