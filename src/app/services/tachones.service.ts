import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITachones } from '../interfaces/tachones';

@Injectable({
  providedIn: 'root'
})
export class TachonesService 
{
  private endPoint: string = environment.endPoint;
  private apiUrl: string = this.endPoint + "Tachones/"

  constructor(private http: HttpClient) 
  {
    
  }
  
  // metodo para invocar el endpoint GET api/Tachones
  getLit(): Observable<ITachones[]>
  {
    return this.http.get<ITachones[]>(`${this.apiUrl}`);
  }

  // Metodo para invocar el endpoint POST api/Tachones
  add(request: ITachones): Observable<ITachones[]>
  {
    return this.http.post<ITachones[]>(`${this.apiUrl}`, request);
  }

  // Metodo para invocar el endpoint PUT api/Tachones
  update(request: ITachones): Observable<void>
  {
    return this.http.put<void>(`${this.apiUrl}${request.idTachon}`, request);
  }

  // Metodo para invocar el endpoint DELETE api/Tachones
  delete(idTachon: number): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}${idTachon}`);
  }
}
