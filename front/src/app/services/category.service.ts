import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Category } from "models/category.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {
  }

  private categoryUrl = "http://localhost:8080/category"

  findAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryUrl)
  }


}
