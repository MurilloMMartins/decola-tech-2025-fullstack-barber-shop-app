import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import {
  DetailClientResponse,
  ListClientResponse,
  SaveClientRequest,
  SaveClientResponse,
  UpdateClientRequest,
  UpdateClientResponse,
} from './client.models';
import { IClientService } from './iclients.service';

@Injectable({
  providedIn: 'root',
})
export class ClientsService implements IClientService {
  private readonly basePath = environment.apiURL;

  constructor(private http: HttpClient) {}

  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    return this.http.post<SaveClientResponse>(`${this.basePath}clients`, request);
  }

  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse> {
    return this.http.put<UpdateClientResponse>(`${this.basePath}clients/${id}`, request);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.basePath}clients/${id}`);
  }

  list(): Observable<ListClientResponse[]> {
    return this.http.get<ListClientResponse[]>(`${this.basePath}clients`);
  }

  findByID(id: number): Observable<DetailClientResponse> {
    return this.http.get<DetailClientResponse>(`${this.basePath}clients/${id}`);
  }
}
