import { Component, OnInit } from "@angular/core"
import {GameService} from "../services/game.service"
import {Game} from "../models/game.model"

@Component({
  selector: "epf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  games : Game[] = [];
  constructor(private gameService : GameService) {

  }

  ngOnInit(): void {
  this.gameService.findAll().subscribe(tableau => this.games=tableau);
  }

}
