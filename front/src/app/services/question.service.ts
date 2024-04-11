import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

import { HttpClient } from "@angular/common/http"
import { Question } from "../models/question.model"

@Injectable({
  providedIn: "root",
})
export class QuestionService {
  constructor(private http: HttpClient) {
  }

  private questionUrl = "http://localhost:8080/question"

  findAll(): Observable<Question[]> {
    return this.http.get<Question[]>(this.questionUrl)
  }

  getByIdCategory(cat:number): Observable<Question[]> {
    return this.http.get<Question[]>(`${this.questionUrl}/${cat}`)
  }

  getById(id: number): Observable<Question> {
    return this.http.get<Question>(`${this.questionUrl}/${id}`)
  }

  updateQuestion(id: number, question: Question): Observable <Question> {
    return this.http.post<Question>(`${this.questionUrl}/${id}`, question)
  }

  addQuestion(question: Question): Observable<Question>{
    return this.http.post<Question>(this.questionUrl, question)
  }

  deleteQuestion(id: number): Observable<any>{
    return this.http.delete(`${this.questionUrl}/${id}`)
  }


}
