import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Game } from "models/game.model"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root",
})
export class GameService {
  constructor(private http: HttpClient) {
  }

  private gameUrl = "http://localhost:8080/game"

  findAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.gameUrl)
  }


}
