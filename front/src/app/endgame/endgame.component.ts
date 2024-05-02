import { Component, Input, OnInit } from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { Player } from "../models/player.model"

@Component({
  selector: 'epf-endgame',
  templateUrl: './endgame.component.html',
  styleUrls: ['./endgame.component.scss']
})
export class EndgameComponent implements OnInit {
  players:Player[]=[];
  constructor(private route: ActivatedRoute, private  router: Router) {

  }

  ngOnInit(): void {

  }

}
