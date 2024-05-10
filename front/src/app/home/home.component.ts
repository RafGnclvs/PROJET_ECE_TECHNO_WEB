import { Component, ElementRef, OnInit, Renderer2 } from "@angular/core"
import {GameService} from "../services/game.service"
import {Game} from "../models/game.model"



@Component({
  selector: "epf-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService, private renderer: Renderer2, private elRef: ElementRef) {

  }

  ngOnInit(): void {
    this.gameService.findAll().subscribe(tableau => this.games = tableau);

    const videoEl = this.elRef.nativeElement.querySelector('#bgvid');
    if (videoEl) {
      this.renderer.setProperty(videoEl, 'autoplay', true);
      this.renderer.setProperty(videoEl, 'muted', true);
      this.renderer.setProperty(videoEl, 'loop', true);
    }
  }
}
