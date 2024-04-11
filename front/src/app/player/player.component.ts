import { Component, OnInit } from '@angular/core';
import { Question } from "../models/question.model"
import { Player } from "../models/player.model"
import { CategoryService } from "../services/category.service"
import { PlayerService } from "../services/player.service"
import { Student } from "../models/student.model"
import { map, Observable } from "rxjs"
import { Router } from "@angular/router"

@Component({
  selector: 'epf-player',
  templateUrl: './player.component.html',
  styleUrls: ["./player.component.scss"],

})
export class PlayerComponent implements OnInit {

  players : Player[] = [];
  newPlayerPseudo: string = '';

  selectedPlayer: Player = { pseudo: '', score: 0, classement: 0 }; // Adaptez selon votre modèle


  constructor(private playerService : PlayerService) { }

  ngOnInit(): void {
    this.playerService.findAll().subscribe(tableau => this.players=tableau);
  }
  selectPlayer(player: Player): void {
    this.selectedPlayer = { ...player };
  }
  /*
  Add():void
  {
    this.playerService.Add({ pseudo: 'TESTADD', classement: 1, score: 2}).subscribe(value => this.player.push(value));
  }
*/
  save(NWPlayer: Player) {

    this.playerService.Add(NWPlayer).subscribe(value => this.players.push(value))

  }
  addPlayer(): void {
    if (this.newPlayerPseudo) {
      const newPlayer: Player = {
        pseudo: this.newPlayerPseudo,
        classement: 0,
        score: 0
      };
      this.playerService.Add(newPlayer).subscribe(value => {
        this.players.push(value);
        this.newPlayerPseudo = ''; // Réinitialiser le champ après l'ajout
      });
    }
  }

  deletePlayer(idPlayer: bigint | undefined): void {
    if (typeof idPlayer !== 'undefined') {

      this.playerService.deletePlayer(idPlayer as bigint).subscribe(() => {

        this.players = this.players.filter(players => players.id_player !== idPlayer);
      });
    } else {
      console.error('Tentative de suppression d’un joueur sans ID valide.');

    }
  }


  updatePlayer(player: Player): void {
      this.playerService.updatePlayer(this.selectedPlayer, this.selectedPlayer.id_player as bigint).subscribe({
        next: (updatedPlayer) => {

          console.log('Mise à jour réussie', updatedPlayer);
          this.players = this.players.map(_player =>
             _player.id_player === updatedPlayer.id_player ? updatedPlayer : _player
          );



        },

      });

  }





}
