import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Response } from "../models/response.model"
import { Question } from "../models/question.model"
import { QuestionService } from "../services/question.service"
import { ResponseService } from "../services/response.service"


@Component({
  selector: 'epf-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {

  id?: number;
  id_rep? :number ;
  path: string=`assets/Question_img/`;
  questions : Question[] = [];
  responses : Response[] = [];
  editMode = false;
  SelectedResponse : Response =
    {
      resp1: "",
      resp2: "",
      resp3: "",
      good_resp : ""
    }
  ;

  Changement(Rep : Response)
  {
    this.editMode = true ;
    this.SelectedResponse={ ...Rep};

  }
// Méthode pour soumettre les modifications
  UpdateQuestion(rep: Response) {

    console.log("ON EST DANS UPDATE QUESTION", rep);
    console.log("SELECTED RESPONSE", this.SelectedResponse.id_response as bigint);
    this.editMode = false;


    this.responseService.updateResponse( this.SelectedResponse.id_response as bigint,this.SelectedResponse).subscribe({
      next: (updatedQuestion) => {

        console.log('Mise à jour réussie', updatedQuestion);

        this.responses = this.responses.map(_rep =>

          {
            if (          _rep.id_response === updatedQuestion.id_response             ) {
              return updatedQuestion;
            }
            return _rep;
          }
        );
        console.log("SELECTED RESPONSE", updatedQuestion.resp1 );
      },
    });

  }

  /*
   updatePlayer(player: Player): void {
      this.playerService.updatePlayer(this.selectedPlayer, this.selectedPlayer.id_player as bigint).subscribe({
        next: (updatedPlayer) => {

          console.log('Mise à jour réussie', updatedPlayer);
          this.players = this.players.map(_player =>
             _player.id_player === updatedPlayer.id_player ? updatedPlayer : _player
          );
        },
      });
  }

   */

  constructor(private route: ActivatedRoute, private questionService : QuestionService,private responseService : ResponseService) { }



  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
     this.id = Number(routeParams.get('id'));
     this.id_rep=Number(routeParams.get('id_rep'));
    this.questionService.findAll().subscribe(tableau => this.questions=tableau);
    this.responseService.findAll().subscribe(tableau => this.responses=tableau);

    // Find the product that correspond with the id provided in route.
  }

}
