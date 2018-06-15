import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../core/url.constant';
import { catchError, map, tap } from 'rxjs/operators';
import { IFiles, Files } from './list-files.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ListFilesService {

  constructor(private httpClient: HttpClient) {
  }

  public getListFiles(): Observable<Files> {
    const url = `${environment.apiUrl}files`;

    return this.httpClient.get(url).pipe(map((res: Files) => {
      return res;
    }));
  }

  public updateFile(id: string, body: IFiles): Observable<any> {
    const url = `${environment.apiUrl}files/` + id;

    return this.httpClient.put(url, body);
  }

  public uploadFile(file): Observable<any> {
    const url = `${environment.apiUrl}files`;
    return this.httpClient.post(url, file);
  }

  public deleteFile(id): Observable<any> {
    const url = `${environment.apiUrl}files/` + id;
    return this.httpClient.delete(url);
  }

}
