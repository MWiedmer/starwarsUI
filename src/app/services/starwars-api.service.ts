import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, catchError, tap} from 'rxjs/operators';
import {Spaceship} from './models/spaceship';

const endpoint = 'https://swapi.co/api/starships/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class StarwarsApiService {

  private spaceship: Spaceship;

  constructor(private http: HttpClient) {
  }

  private extractData(res: Response) {
    console.log('Response: ', res);
    let body = res;
    return body || {};
  }

  getSpaceship(id): Observable<any> {
    console.log('Getting Spaceship from Api: ', id);
    return this.http.get(endpoint + id).pipe(
      map(this.extractData));
  }

  getSpaceships(): Observable<any> {
    console.log('Getting Spaceships from Api: ');
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}


