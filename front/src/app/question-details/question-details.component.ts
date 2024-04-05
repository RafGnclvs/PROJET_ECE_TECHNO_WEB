import { Component, OnInit } from '@angular/core';
<<<<<<< Updated upstream
=======
import { ActivatedRoute } from "@angular/router"
import { Response } from "../models/response.model"
>>>>>>> Stashed changes

@Component({
  selector: 'epf-question-details',
  templateUrl: './question-details.component.html',
  styleUrls: ['./question-details.component.scss']
})
export class QuestionDetailsComponent implements OnInit {
<<<<<<< Updated upstream
=======
  id?: number;
  //rep: Response ;
  id_rep? :number ;

  constructor(private route: ActivatedRoute) { }
>>>>>>> Stashed changes

  constructor() { }

  ngOnInit(): void {
<<<<<<< Updated upstream
=======
    const routeParams = this.route.snapshot.paramMap;
     this.id = Number(routeParams.get('id'));
     this.id_rep=Number(routeParams.get('id_rep'));

    // Find the product that correspond with the id provided in route.
>>>>>>> Stashed changes
  }

}
