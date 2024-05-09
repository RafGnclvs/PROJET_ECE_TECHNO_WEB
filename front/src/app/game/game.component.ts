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
import { trigger, state, style, animate, transition, AnimationEvent } from '@angular/animations';




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
        animate('2s')
      ])
    ])
  ]
})
export class GameComponent implements OnInit {
  games:Game[]=[];
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
  numberOfQuestionToSelected:number=5;
  showPage: number=0;
  playerScorMap!:Map<number, number>;
  playerClassementArray: [string, number][] = [];

  rectangleHeights: number[] = [];
  showCongratulations = 0;

  confettis: { x: number, y: number, color: string }[] = [];
  colors = ['#ffcc00', '#ff6699', '#66ff66', '#66ccff', '#cc66ff'];
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
      this.playerScorMap = new Map<number, number>();
      this.players.forEach(player=>{
        if (player.id_player != null) {
          this.playerScorMap.set(Number(player.id_player), 0)
        }
      })
    });

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
      this.gameClassement();
      this.generateRectangleHeights();
    }
  }

  scorCalculation(selectedResponse: string):void{
    /*if(this.currentResponse){
      if(selectedResponse===this.currentResponse.good_resp){
        this.players[this.currentPlayerIndex].score=this.players[this.currentPlayerIndex].score+1;
        console.log("REGARDE TA MAP ", this.playerScorMap);
      }
      console.log("Joueur actuel: ",this.players[this.currentPlayerIndex]);
      this.nextPlayer();
    }else{
      console.log("Erreur, pas de reponse actuelle");
    }*/

    if(this.currentResponse){
      if(selectedResponse===this.currentResponse.good_resp){
        this.players[this.currentPlayerIndex].score=this.players[this.currentPlayerIndex].score+1;

        const player_id=Number(this.players[this.currentPlayerIndex].id_player);
        if(this.playerScorMap.has(player_id)){
          let currentScor=this.playerScorMap.get(player_id);
          currentScor= currentScor ? currentScor + 1 : 1;
          this.playerScorMap.set(player_id,currentScor);
        }
        console.log("REGARDE TA MAP ", this.playerScorMap);
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

      this.playerService.updatePlayer(player,player.id_player as bigint).subscribe(
        {
          next : (nv)=>
          {
            console.log('Mise à jour réussie', nv);
            this.players = this.players.map(_player =>
              _player.id_player === nv.id_player ? nv : _player
            );
          }
        });
    });

  }

  gameClassement():void{
    // Convertir playerScorMap en un tableau d'entrées
    let playerScorArray = Array.from(this.playerScorMap.entries());

    // Trier le tableau en fonction des valeurs (scores) de manière décroissante
    playerScorArray.sort((a, b) => b[1] - a[1]); // Tri des scores de manière décroissante

    // Recréer une nouvelle Map à partir du tableau trié
    this.playerScorMap = new Map<number, number>(playerScorArray);

    let pseudoMap = new Map<string, number>;

    this.playerScorMap.forEach((value, key) => {
      // Rechercher dans le tableau players l'objet joueur correspondant à cette clé (id)
      let player = this.players.find(player =>Number (player.id_player) === key);

      // Vérifier si le joueur correspondant a été trouvé
      if (player) {
        // Ajouter le pseudonyme du joueur au tableau de pseudonymes
        pseudoMap.set(player.pseudo,value);
      }
    });
    this.playerClassementArray=Array.from(pseudoMap.entries());
  }
  generateRectangleHeights(): void {
    if (this.numberPlayer && this.players) {
      for (let i = 0; i < this.numberPlayer; i++) {// on multiplie le scor du joueur par 10 pour un meilleur affichage
        this.rectangleHeights.push(20 * this.playerClassementArray[i][1]);
      }
    }
  }

  getRectangleStyle(index: number): any {
    return {
      'margin-right.px': index !== this.rectangleHeights.length - 1 ? 5 : 0 // Espacement entre les rectangles
    };
  }

  saveGame():void{
    const game: { [key: string]: number | bigint | null | undefined } = {
      id_cat: this.id_cat
    };

    for (let i = 0; i < Math.min(this.players.length, 4); i++) {
      const playerIdKey = `id_p${i + 1}`;
      const playerScoreKey = `p${i + 1}_score`;

      game[playerIdKey] = this.players[i] ? this.players[i].id_player : null;
      game[playerScoreKey] = this.players[i] ? this.playerScorMap.get(Number(this.players[i].id_player)) : null;

      console.log("Joueur", i + 1, "ID:", game[playerIdKey], "Score:", game[playerScoreKey]);
    }
    this.gameService.Save(game).subscribe(value => {
      this.games.push(value);})
    console.log("SAUVEGARDER",game);
  }

  onAnimationEnd(event: AnimationEvent) {
    if (event.toState === 'active') {
      // Lancement des confettis après la fin de l'animation
      if(this.playerClassementArray[0][1]===this.playerClassementArray[1][1]){
        this.showCongratulations=2;
      }else {
        this.showCongratulations = 1;
      }
      this.launchConfetti();
    }
  }
  launchConfetti() {
    for (let i = 0; i < 300; i++) {
      this.confettis.push({
        x: Math.random() * window.innerWidth,
        y: -Math.random() * window.innerHeight, // confettis start above the container
        color: this.colors[Math.floor(Math.random() * this.colors.length)]
      });
    }

    // Démarrez le mouvement des confettis
    this.moveConfetti();
  }

  moveConfetti() {
    const duration = 100; // Durée en millisecondes pendant laquelle les confettis tombent

    setTimeout(() => {
      // Supprimez tous les confettis existants
      this.confettis = [];

      // Lancez à nouveau le lancement des confettis après la durée spécifiée
      this.launchConfetti();
    }, duration);

  }


  protected readonly BigInt = BigInt
  protected readonly String = String
}

