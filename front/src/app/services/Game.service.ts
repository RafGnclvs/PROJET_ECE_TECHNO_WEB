import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Category } from "models/category.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor(private http: HttpClient) {
  }

  private categoryUrl = "http://localhost:8080/Game"

  findAll(): Observable<Game[]> {
    return this.http.get<Category[]>(this.categoryUrl)
  }


}
