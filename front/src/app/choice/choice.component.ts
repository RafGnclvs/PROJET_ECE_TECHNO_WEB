import { Component, OnInit } from '@angular/core';
import {Category} from "../models/category.model"
import {CategoryService} from "../services/category.service"
import {Player} from "../models/player.model"
import {PlayerService} from "../services/player.service"
import { Router } from "@angular/router"

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
  playersSaved: Player[]=[];
  playerInGame: Player[]=[];
  currentPlayerName: string="";
  currentPlayerIndex: number = 0;
  idCatSelected:number=0;
  playerAlreadyExists:boolean =false;
  constructor(private categoryService : CategoryService, private playerService:PlayerService, private  router: Router) { }

  ngOnInit(): void {
    this.categoryService.findAll().subscribe(tableau => this.categories=tableau);
    this.playerService.findAll().subscribe(tableau=>this.playersSaved=tableau);
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


    this.confirmPlayerNames();
    if(!this.playerAlreadyExists){
      // Passer au joueur suivant
      this.currentPlayerIndex++;
      if (this.currentPlayerIndex >= this.numberOfPlayers) {
        // Si tous les joueurs ont saisi leur nom, passer à l'étape suivante
        console.log('Noms des joueurs :', this.playerNames);
      } else {
        // Réinitialiser le nom saisi pour le prochain joueur
        this.currentPlayerName = '';
      }
    }
    this.currentPlayerName = '';
  }

  confirmPlayerNames(): void {
    const existingPlayer = this.playersSaved.find(player => player.pseudo === this.currentPlayerName);

    if (!existingPlayer) {
      const newPlayer: Player = {
        pseudo: this.currentPlayerName,
        classement: 0,
        score: 0
      };

      this.playerService.Add(newPlayer).subscribe(value => {
        this.playersSaved.push(value);
        this.playerInGame.push(value); // Ajoute directement le joueur retourné par le service
        console.log('Un joueur a été créé et ajouté dans le jeu avec le pseudo:', value.pseudo, this.playerInGame);

        if (this.numberOfPlayers <= this.playerInGame.length) {
          console.log('LA TAILLE DE MON TABLEAU : ',this.playerInGame.length);
          this.router.navigate(['../game/',this.idCatSelected,this.numberOfPlayers,this.playersIdCast()]);
        }
      });
      this.playerAlreadyExists = false;
    } else {
      if (!this.playerInGame.find(player => player.pseudo === existingPlayer.pseudo)) {
        this.playerInGame.push(existingPlayer);
        console.log("Ce joueur existant n'est pas dans le jeu et est donc ajouté avec le pseudo: ", existingPlayer.pseudo);
        this.playerAlreadyExists = false;
      }
      else {
        this.playerAlreadyExists = true;
        console.log('Ce joueur existe déjà dans le jeu avec le pseudo: ', existingPlayer.pseudo);
      }

      if (this.numberOfPlayers <= this.playerInGame.length) {
        console.log('LA TAILLE DE MON TABLEAU : ',this.playerInGame.length);
        this.router.navigate(['../game/',this.idCatSelected,this.numberOfPlayers,this.playersIdCast()]);
      }
    }
  }

  playersIdCast (): string {
    return this.playerInGame.map(player => player.id_player ? player.id_player.toString() : 'undefined').join(',');
  }


}
