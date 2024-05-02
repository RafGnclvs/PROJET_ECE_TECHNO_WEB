import { Component, OnInit, Input } from "@angular/core"
import { GameService } from "../services/game.service"
import {Game} from "../models/game.model"
import {Question} from "../models/question.model"
import  {QuestionService} from "../services/question.service"
import {Response} from "../models/response.model"
import {ResponseService} from "../services/response.service"
import { ActivatedRoute, Router } from "@angular/router"
import { Player } from "../models/player.model"
import { PlayerService } from "../services/player.service"
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'epf-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('increaseHeight', [
      state('active', style({
        height: '{{ finalHeight }}px'
      }), { params: { finalHeight: 300 } }),
      transition('* => active', [
        animate('3s')
      ])
    ])
  ]
})
export class GameComponent implements OnInit {
  game:Game[]=[];
  questions: Question[]=[];
  responses: Response[]=[];
  path: string=`assets/Question_img/`;
  playersIds: number[]=[];
  id_cat?: number;
  numberPlayer?:number;
  players:Player[]=[];
  currentPlayerIndex:number=0;
  currentQuestionIndex:number=0;
  currentResponse?:Response;
  reponseShuffled:string[]=[];
  numberOfQuestionToSelected:number=1;
  showPage: number=0;

  rectangleCount: number = 5; // Nombre de rectangles
  initialHeight: number = 300; // Largeur initiale du premier rectangle
  rectangleHeights: number[] = [];
  rectangleState = 'active';
  constructor(private gameService:GameService, private questionService : QuestionService,private responseService : ResponseService,private playerService: PlayerService,private route: ActivatedRoute, private  router: Router) {}
  togglePage(page: number): void {
    this.showPage=page;
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.id_cat = Number(routeParams.get('id_cat'));
    this.numberPlayer= Number(routeParams.get('numberPlayer'));
    this.playersIds=String(routeParams.get('playersIds')).split(',').map(id=>+id);
    console.log('Id de la catégorie sélectionné :', this.id_cat);
    console.log('Nombre de joueurs sélectionné :', this.numberPlayer);
    //this.gameService.findAll().subscribe(tableau =>this.game=tableau);
    this.questionService.getByIdCategory(this.id_cat).subscribe(tableau => {
      const shuffledQuestion=tableau;
      shuffledQuestion.sort(()=>Math.random()-0.5);
      this.questions=shuffledQuestion.slice(0,this.numberOfQuestionToSelected);
      this.getResponses();
    });
    this.playerService.getByIds(this.playersIds).subscribe(tableau =>{
      // Tri des joueurs pour les remettre dans le bon ordre
      const playerMap = new Map<number, Player>();
      tableau.forEach(player => {
        playerMap.set(Number(player.id_player), player)
      });
      this.players = this.playersIds.map(id => playerMap.get(id)!);
      //this.players=tableau;
    });
    this.generateRectangleHeights();
  }

  getResponses():void{
    this.questions.forEach(question=>{
        this.responseService.getById(BigInt(question.id_res)).subscribe(res =>{
          this.responses.push(res);
          if(Number(res.id_response)===this.questions[this.currentQuestionIndex].id_res){
            this.responseShuffling();
          }
        });
    });
  }

  responseShuffling():void{
    this.currentResponse=this.responses.find(response =>Number(response.id_response)===this.questions[this.currentQuestionIndex].id_res
    );
    //console.log("ID de la question reçu LELE: ",this.questions[this.currentQuestionIndex].id_res);
    //console.log("Réponse reçue LELE :", this.currentResponse);
    if(this.currentResponse){
     const allStringResp=Object.values(this.currentResponse).filter(value => typeof value==='string');
     function randomSort(a: string, b: string): number {
       return Math.random() - 0.5;
     }
     this.reponseShuffled=allStringResp.sort(randomSort);
     //console.log("mes reponses mélangés", this.reponseShuffled);
    }else{
     console.log("Erreur, aucune réponse trouvé pour la question actuelle")
    }

  }

  nextPlayer(): void {
    /*console.log('ID JOUERU! :',this.currentPlayerIndex);
    if(this.playersIds){
      console.log("mon petit ",this.players[this.currentPlayerIndex]);
    }*/
    this.currentPlayerIndex++;
    if (this.currentPlayerIndex >= this.numberPlayer!) {
      console.log('Question suivante! :');
      this.currentPlayerIndex=0;
      this.nextQuestion();
    } else {
      console.log('Joueur suivant! :');
    }
    /*if (this.numberOfPlayers === this.playerInGame.length) {
      console.log('LA TAILLE DE MON TABLEAU : ',this.playerInGame.length);
      this.router.navigate(['../game/',this.idCatSelected,this.numberOfPlayers,this.playersIdCast()]);
    }*/
  }
  nextQuestion(): void {
    this.currentQuestionIndex++;
    if(this.currentQuestionIndex < this.questions.length!) {
      console.log('Question suivante MON POULET! :');
      this.responseShuffling();
    } else {
      console.log('FIN DES QUESTIONS! :');
      //this.router.navigate(['../endgame/']);
      this.ClassementJou();
      this.togglePage(1);
    }
  }

  scorCalculation(selectedResponse: string):void{
    if(this.currentResponse){
      if(selectedResponse===this.currentResponse.good_resp){
        this.players[this.currentPlayerIndex].score=this.players[this.currentPlayerIndex].score+1;
      }
      console.log("Joueur actuel: ",this.players[this.currentPlayerIndex]);
      this.nextPlayer();
    }else{
      console.log("Erreur, pas de reponse actuelle");
    }
  }
  display():void{
    console.log("Liste des joueurs recup mon gars", this.players);
  }

  ClassementJou(): void {
    this.players.sort((a, b) => b.score - a.score);

      let lastScore = 0;
      let lastRank = 0;
      let gap = 1;

      this.players.forEach((player, index) => {
        if (player.score === lastScore) {

          player.classement = lastRank;
          gap++;
        } else {

          lastRank += gap;
          player.classement = lastRank;
          lastScore = player.score;
          gap = 1;
        }
      });
    
    this.playerService.updatePlayer(player,player.id_player as bigint).subscribe(
          {
            next : (nv)=>
            {
              console.log('Mise à jour réussie', nv);
              this.players = this.players.map(_player =>
                _player.id_player === nv.id_player ? nv : _player
              );
            }
          }
        )
      });
  }

  generateRectangleHeights(): void {
    if(this.numberPlayer){
      for (let i = 0; i < this.numberPlayer; i++) {
        this.rectangleHeights.push(this.initialHeight - i * 25); // Diminuer la hauteur de 25px pour chaque rectangle
      }
    }
  }

  getRectangleStyle(index: number): any {
    return {
      'margin-right.px': index !== this.rectangleHeights.length - 1 ? 5 : 0 // Espacement entre les rectangles
    };
  }




  protected readonly BigInt = BigInt
  protected readonly String = String
}

