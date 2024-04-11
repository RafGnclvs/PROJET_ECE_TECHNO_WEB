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
  currentQuestion: number=0;
  currentResponse: number=0;
  currentAction: string = "";
  path: string=`assets/Question_img/`;
  togglePage(page: number): void {
    this.showPage=page;
  }

  constructor(private categoryService : CategoryService, private questionService : QuestionService,private responseService : ResponseService) {

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

  ModifierPage():void
    {
      this.togglePage(1);
    }
  protected readonly Q = Q
}
