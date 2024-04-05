import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router"
import { Response } from "../models/response.model"


@Component({
  selector: 'epf-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {

  id?: number;
  id_rep? :number ;

  constructor(private route: ActivatedRoute) { }



  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
     this.id = Number(routeParams.get('id'));
     this.id_rep=Number(routeParams.get('id_rep'));

    // Find the product that correspond with the id provided in route.
  }

}
