import { Injectable } from "@angular/core"
import { Observable } from "rxjs"
import { Course } from "models/course.model"
import { HttpClient } from "@angular/common/http"
import { Player } from "../models/player.model"
import { Student } from "../models/student.model"

@Injectable({
  providedIn: "root",
})
export class PlayerService {
  constructor(private http: HttpClient) {
  }

  private playerUrl = "http://localhost:8080/player"

  findAll(): Observable<Player[]> {
    return this.http.get<Player[]>(this.playerUrl)
  }
  Add(player: Player): Observable<Player> {
    return this.http.post<Player>(this.playerUrl, player)
  }

  deletePlayer(id: bigint): Observable<any> {
    return this.http.delete(`${this.playerUrl}/${id}`);
  }

  updatePlayer(player: Player, id: bigint): Observable<Player> {
    return this.http.post<Player>(`${this.playerUrl}/${id}`, player);
  }
}
