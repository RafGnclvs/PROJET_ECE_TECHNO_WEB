import { Component, OnInit } from '@angular/core';
import { GameService } from "../services/game.service"
import {Game} from "../models/game.model"
import {Question} from "../models/question.model"
import  {QuestionService} from "../services/question.service"
import {Response} from "../models/response.model"
import {ResponseService} from "../services/response.service"
import { ActivatedRoute } from "@angular/router"
import { Player } from "../models/player.model"
import { PlayerService } from "../services/player.service"

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
  playersIds?: number[];
  id_cat?: number;
  numberPlayer?:number;
  players:Player[]=[];
  currentPlayerIndex:number=0;
  constructor(private gameService:GameService, private questionService : QuestionService,private responseService : ResponseService,private playerService: PlayerService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id_cat = Number(routeParams.get('id_cat'));
    this.numberPlayer= Number(routeParams.get('numberPlayer'));
    this.playersIds=String(routeParams.get('playersIds')).split(',').map(id=>+id);
    console.log('Id de la catégorie sélectionné :', this.id_cat);
    console.log('Nombre de joueurs sélectionné :', this.numberPlayer);
    this.gameService.findAll().subscribe(tableau =>this.game=tableau);
    this.questionService.getByIdCategory(this.id_cat).subscribe(tableau => this.questions=tableau);
    this.responseService.findAll().subscribe(tableau => this.responses=tableau);
    this.playerService.getByIds(this.playersIds).subscribe(tableau => this.players=tableau);
  }

  /*nextPlayer(): void {
    //On récupère le s
    // On passe au joueur d'après
    this.playerNames[this.currentPlayerIndex] = this.currentPlayerName || 'Joueur ' + (this.currentPlayerIndex + 1);
    if(!this.playerAlreadyExists){
      // Passer au joueur suivant
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.numberOfPlayers!) {
        // Si tous les joueurs ont saisi leur nom, passer à l'étape suivante
        console.log('Noms des joueurs :', this.playerNames);
      } else {
        // Réinitialiser le nom saisi pour le prochain joueur
        this.currentPlayerName = '';
      }
    }

    /*if (this.numberOfPlayers === this.playerInGame.length) {
      console.log('LA TAILLE DE MON TABLEAU : ',this.playerInGame.length);
      this.router.navigate(['../game/',this.idCatSelected,this.numberOfPlayers,this.playersIdCast()]);
    }
  }*/
  nextQuestion(): void {
    // Stocker le nom saisi par le joueur actuel
    /*this.playerNames[this.currentPlayerIndex] = this.currentPlayerName || 'Joueur ' + (this.currentPlayerIndex + 1);
    if(!this.playerAlreadyExists){
      // Passer au joueur suivant
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.numberOfPlayers!) {
        // Si tous les joueurs ont saisi leur nom, passer à l'étape suivante
        console.log('Noms des joueurs :', this.playerNames);
      } else {
        // Réinitialiser le nom saisi pour le prochain joueur
        this.currentPlayerName = '';
      }
    }*/
  }
  display():void{
    console.log("Liste des joueurs recup mmon gars", this.players);
  }


}
