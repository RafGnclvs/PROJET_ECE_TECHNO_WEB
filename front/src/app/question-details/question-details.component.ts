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
  id_categorie? :number;
  showPage? : number=0;
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
  constructor(private route: ActivatedRoute, private questionService : QuestionService,private responseService : ResponseService) { }

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

      },
    });

  }





  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
     this.id = Number(routeParams.get('id'));
     this.id_rep=Number(routeParams.get('id_rep'));

    this.questionService.findAll().subscribe(tableau => this.questions=tableau);
    this.responseService.findAll().subscribe(tableau => this.responses=tableau);

    // Find the product that correspond with the id provided in route.
  }

}
/*
addQuestion(): void {
  if (this.newPlayerPseudo) {
  const newQuestion: Question = {
    pseudo: this.newPlayerPseudo,
    classement: 0,
    score: 0
  };
  this.playerService.Add(newQuestion).subscribe(value => {
    this.players.push(value);
    this.newPlayerPseudo = ''; // Réinitialiser le champ après l'ajout
  });
}
}
*/
/*
  deletePlayer(idPlayer: bigint | undefined): void {
    if (typeof idPlayer !== 'undefined') {

      this.playerService.deletePlayer(idPlayer as bigint).subscribe(() => {

        this.players = this.players.filter(players => players.id_player !== idPlayer);
      });
    } else {
      console.error('Tentative de suppression d’un joueur sans ID valide.');

    }
  }

 */
