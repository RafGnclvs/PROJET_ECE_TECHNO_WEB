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



}
