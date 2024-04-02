import { Component, OnInit } from "@angular/core"
import { StudentService } from "../services/student.service"
import { Student } from "../models/student.model"

@Component({
  selector: "epf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  students : Student[] = [];
  constructor(private studentService : StudentService) {

  }

  ngOnInit(): void {
  this.studentService.findAll().subscribe(tableau => this.students=tableau);
  }

}
