import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service"
import {Game} from "../models/game.model"
import {Question} from "../models/question.model"
import  {QuestionService} from "../services/question.service"
import {Response} from "../models/response.model"
import {ResponseService} from "../services/response.service"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'epf-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  game:Game[]=[];
  questions: Question[]=[];
  responses: Response[]=[];
  path: string=`assets/Question_img/`;
  id_cat?: number;
  numberPlayer?:number;
  constructor(private gameService:GameService, private questionService : QuestionService,private responseService : ResponseService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id_cat = Number(routeParams.get('id_cat'));
    this.numberPlayer= Number(routeParams.get('numberPlayer'));
    console.log('Id de la catégorie sélectionné :', this.id_cat);
    console.log('Nombre de joueurs sélectionné :', this.numberPlayer);
    this.gameService.findAll().subscribe(tableau =>this.game=tableau);
    this.questionService.getByIdCategory(this.id_cat).subscribe(tableau => this.questions=tableau);
    this.responseService.findAll().subscribe(tableau => this.responses=tableau);

  }




}
