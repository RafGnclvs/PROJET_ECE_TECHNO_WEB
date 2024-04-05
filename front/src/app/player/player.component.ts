import { Component, OnInit } from '@angular/core';
import { Question } from "../models/question.model"
import { Player } from "../models/player.model"
import { CategoryService } from "../services/category.service"
import { PlayerService } from "../services/player.service"

@Component({
  selector: 'epf-player',
  templateUrl: './player.component.html',

})
export class PlayerComponent implements OnInit {

  player : Player[] = [];
  constructor(private playerService : PlayerService) { }

  ngOnInit(): void {
    this.playerService.findAll().subscribe(tableau => this.player=tableau);
  }
  Add():void
  {
    this.playerService.Add({ pseudo: 'rita', classement: 1, score: 2}).subscribe(value => this.player.push(value));
  }
}
