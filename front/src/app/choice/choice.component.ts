import { Component, OnInit } from '@angular/core';
import {Category} from "../models/category.model"
import {CategoryService} from "../services/category.service"
import {Player} from "../models/player.model"
import {PlayerService} from "../services/player.service"

@Component({
  selector: 'epf-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  showPage: number=1;
  numberOfPlayers: number=0;
  categories:Category[]=[];
  playerNames:string[]=[];
  currentPlayerName: string="";
  currentPlayerIndex: number = 0;
  idCatSelected:number=0;
  constructor(private categoryService : CategoryService) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(tableau => this.categories=tableau);
  }

  togglePage(page: number): void {
    this.showPage=page;
  }
  selectIdCategory(idCat: number ): void {
    this.idCatSelected = idCat;
    console.log('ID de la catégorie sélectionné :', this.idCatSelected);
    this.togglePage(2);
  }
  selectNumberOfPlayers(numberOfPlayers: number): void {
    this.numberOfPlayers = numberOfPlayers;
    console.log('Nombre de joueurs sélectionné :', this.numberOfPlayers);
    this.playerNames= new Array(this.numberOfPlayers||0);
    this.togglePage(3);
  }

  nextPlayer(): void {
    // Stocker le nom saisi par le joueur actuel
    this.playerNames[this.currentPlayerIndex] = this.currentPlayerName || 'Joueur ' + (this.currentPlayerIndex + 1);

    // Passer au joueur suivant
    this.currentPlayerIndex++;
    if (this.currentPlayerIndex >= this.numberOfPlayers!) {
      // Si tous les joueurs ont saisi leur nom, passer à l'étape suivante
      this.confirmPlayerNames();
    } else {
      // Réinitialiser le nom saisi pour le prochain joueur
      this.currentPlayerName = '';
    }
  }

  confirmPlayerNames(): void {
    // Valider les noms des joueurs si nécessaire
    // Stocker les noms des joueurs dans une structure de données appropriée
    console.log('Noms des joueurs :', this.playerNames);
    // ... Autres actions à effectuer après confirmation des noms des joueurs ...
  }

  protected readonly Array = Array
}
