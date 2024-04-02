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

  constructor(private categoryService : CategoryService, private questionService : QuestionService,private responseService : ResponseService) {

  }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(tableau => this.category=tableau);
    this.questionService.findAll().subscribe(tableau => this.question=tableau);
    this.responseService.findAll().subscribe(tableau => this.response=tableau);

  }




  protected readonly Q = Q
}
