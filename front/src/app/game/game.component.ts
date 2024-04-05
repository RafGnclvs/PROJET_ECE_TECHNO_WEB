import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service"
import {Game} from "../models/game.model"

@Component({
  selector: 'epf-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game:Game[]=[];
  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.gameService.findAll().subscribe(tableau =>this.game=tableau);

  }

}
