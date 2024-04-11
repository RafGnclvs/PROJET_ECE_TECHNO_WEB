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

// Méthode pour soumettre les modifications
  UpdateQuestion() {
    console.log("Soumission du formulaire", this.responses);
    // Ici, tu peux appeler un service pour mettre à jour la réponse dans la base de données ou backend
    this.editMode = false; // Sortie du mode édition
  }

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
