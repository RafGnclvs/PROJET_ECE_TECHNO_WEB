import { Component, OnInit } from "@angular/core"
import { Link } from "models/links.model"

@Component({
  selector: "epf-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  links: Link[] = []

  constructor() {
   // this.links.push({ name: "Students", href: "students" })
  //  this.links.push({ name: "Majors", href: "majors" })
    this.links.push({ name: "User", href: "player" })
    this.links.push({ name: "Admin", href: "admin" })



  }
}
