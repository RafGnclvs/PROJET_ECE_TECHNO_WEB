import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { HttpClient } from "@angular/common/http"
import { Question } from "../models/question.model"
import { Response } from "../models/response.model"

@Injectable({
  providedIn: "root",
})
export class ResponseService {
  constructor(private http: HttpClient) {
  }

  private responseUrl = "http://localhost:8080/response"

  findAll(): Observable<Response[]> {
    return this.http.get<Response[]>(this.responseUrl)
  }

  getById(id: bigint): Observable<Response> {
    return this.http.get<Response>(`${this.responseUrl}/${id}`)
  }

  updateResponse(id: bigint, response: Response): Observable <Response> {
    return this.http.post<Response>(`${this.responseUrl}/${id}`, response)
  }

  addResponse(response: Response): Observable<Response>{
    return this.http.post<Response>(this.responseUrl, response)
  }

  deleteResponse(id: bigint): Observable<any>{
    return this.http.delete(`${this.responseUrl}/${id}`)
  }


}
