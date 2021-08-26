import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CurrentUser } from 'src/app/shared/types/current-user.interface';
import { RegisterRequest } from '../types/register-request.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../types/auth-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequest): Observable<CurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponse>(url, data).pipe(map((responce: AuthResponse) => responce.user));
  }
}
