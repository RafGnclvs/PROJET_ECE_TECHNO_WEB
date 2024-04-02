import { Component } from "@angular/core"
import { map, Observable } from "rxjs"
import { Student } from "models/student.model"
import { ActivatedRoute, Router } from "@angular/router"
import { StudentService } from "services/student.service"

@Component({
  selector: "epf-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent {

  constructor(private studentService: StudentService, private router: Router,) {
  }

  students$: Observable<Student[]> = this.studentService.findAll();

  deleteStudent(event: any, student: Student) {
    event.stopPropagation()
    this.studentService.delete(student).subscribe(() => this.router.navigate(["students"]))
  }

  searchByMajorAndCourse($event: Observable<Student[]>) {
    this.students$ = $event
  }
}
