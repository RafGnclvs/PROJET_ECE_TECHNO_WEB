import { Component, OnInit } from '@angular/core';
import { CategoryService } from "../services/category.service"
import { Category } from "../models/category.model"
import { Question } from "../models/question.model"
import { QuestionService } from "../services/question.service"
import { Q } from "@angular/cdk/keycodes"
import { Response } from "../models/response.model"
import { ResponseService } from "../services/response.service"

@Component({
  selector: 'epf-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  category : Category[] = [];
  question : Question[] = [];
  response : Response[] = [];
  showPage: number=0;
  currentCategory: number=0;
  NomsImages : string[]=["Scar_img","Tom_Sawyer_img","Mike_Ross_img"];

  path: string=`assets/Question_img/`;

  NewRep : Response =
    {
      resp1: "",
      resp2: "",
      resp3: "",
      good_resp : ""
    }
  ;
  NewQuest : Question=
    {
      name_img:"",
      id_cat:0,
      id_res:0
    };
  QuestionSupp : Question=
    {
      name_img:"",
      id_cat:0,
      id_res:0
    };
  togglePage(page: number): void {
    this.showPage=page;
  }

  constructor(private categoryService : CategoryService, private questionService : QuestionService,private responseService : ResponseService) {

  }
  Initialisation():void
  {
    this.NewRep.resp1="";
    this.NewRep.resp2="";
    this.NewRep.resp3="";
    this.NewRep.good_resp="";
    this.NewQuest.name_img="";
  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(tableau => this.category=tableau);
    this.questionService.findAll().subscribe(tableau => this.question=tableau);
    this.responseService.findAll().subscribe(tableau => this.response=tableau);

  }


  selectIdCategory(idCat: number ): void {
    this.currentCategory = idCat;
    this.togglePage(2);
  }
  ArrierePage():void
  {
    this.showPage= this.showPage-1;
  }

  ModifierPage():void
    {
      this.togglePage(1);
    }
  QuestionPage():void
  {
    this.togglePage(3);
  }
  AjouterQuestion():void
  {
    this.NewQuest.id_cat = this.currentCategory;


    this.responseService.addResponse(this.NewRep).subscribe({
      next: (value) => {
        this.response.push(value);


        console.log(value);
        this.NewQuest.id_res = Number(value.id_response);
        this.questionService.addQuestion(this.NewQuest).subscribe({
          next: (value) => { this.question.push(value);
            console.log(value);
            this.Initialisation();
          },
        });
      },

    });



  }

  SupprimerQuestion(idQuestion : bigint | undefined): void {
      if (typeof idQuestion !== 'undefined') {

        this.questionService.deleteQuestion(idQuestion).subscribe(() => {

          this.question = this.question.filter(Q => Q.id_question !== idQuestion);
        });
      } else {
        console.error('Tentative de suppression d’un joueur sans ID valide.');

      }
    }


  protected readonly Q = Q
}


