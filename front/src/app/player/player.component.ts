import { Component, OnInit } from '@angular/core';
import { Question } from "../models/question.model"
import { Player } from "../models/player.model"
import { CategoryService } from "../services/category.service"
import { PlayerService } from "../services/player.service"
import { Student } from "../models/student.model"
import { forkJoin, map, Observable } from "rxjs"
import { Router } from "@angular/router"
import { Location } from '@angular/common'
import {Game} from "../models/game.model"
import {GameService} from "../services/game.service"

@Component({
  selector: 'epf-player',
  templateUrl: './player.component.html',
  styleUrls: ["./player.component.scss"],

})
export class PlayerComponent implements OnInit {

  players : Player[] = [];
  games:Game[]=[];
  newPlayerPseudo: string = '';
  showPage: number=0;
  selectedPlayer: Player = { pseudo: '', score: 0, classement: 0 }; // Adaptez selon votre modèle
  verificationAjout: boolean=false;
  VerfiModif: boolean=false;
  test : boolean=false ;

  constructor(private playerService : PlayerService,private gameService:GameService, private location:Location) { }




  ngOnInit(): void {
    this.playerService.findAll().subscribe(tableau => this.players=tableau);
    this.gameService.findAll().subscribe(tableau=>this.games=tableau);
  }
  selectPlayer(player: Player): void {
    this.selectedPlayer = { ...player };
    this.VerfiModif=true;
  }
  togglePage(page: number): void {
    this.showPage=page;
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
    this.verification();
    if(!this.verificationAjout)
    {
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
  }

  getGameIdsByPlayerId(playerId: bigint): bigint[] {
    return this.games
      .filter(game => game.id_p1 === playerId || game.id_p2 === playerId || game.id_p3 === playerId || game.id_p4 === playerId)
      .map(game => game.id_game)
      .filter(id => id !== undefined) as bigint[];
  }
  /*deletePlayer(idPlayer: bigint | undefined): void {
    if (typeof idPlayer !== 'undefined') {
      this.playerService.deletePlayer(idPlayer as bigint).subscribe(() => {
        this.players = this.players.filter(players => players.id_player !== idPlayer);
      });
    } else {
      console.error('Tentative de suppression d’un joueur sans ID valide.');
    }
  }*/

  deletePlayer(idPlayer: bigint | undefined): void {
    if (typeof idPlayer !== 'undefined') {
      const idGames = this.getGameIdsByPlayerId(idPlayer);
      if (idGames.length !== 0) {
        console.log("Suppression des jeux liés au joueur...");
        const deleteGameObservables = idGames.map(id => this.gameService.deleteGame(id));
        forkJoin(deleteGameObservables).subscribe(() => {
          console.log("Jeux supprimés avec succès.")
          // Maintenant, supprimer le joueur une fois que les jeux sont supprimés
          this.playerService.deletePlayer(idPlayer as bigint).subscribe(() => {
            console.log("Joueur supprimé avec succès.")
            // Mettre à jour la liste des joueurs après la suppression
            this.players = this.players.filter(player => player.id_player !== idPlayer)
          }, error => {
            console.error("Erreur lors de la suppression du joueur :", error)
          })
        }, error => {
          console.error("Erreur lors de la suppression des jeux :", error)
        })
      } else {
        console.warn("Aucun jeu trouvé pour ce joueur.");
        // Supprimer directement le joueur si aucun jeu n'est associé
        this.playerService.deletePlayer(idPlayer as bigint).subscribe(() => {
          console.log("Joueur supprimé avec succès.");
          this.players = this.players.filter(player => player.id_player !== idPlayer);
        }, error => {
          console.error("Erreur lors de la suppression du joueur :", error);
        });
      }
    } else {
      console.error('Tentative de suppression d’un joueur sans ID valide.');
    }
  }

  updatePlayer(player: Player): void {
    if(this.players.find(p => p.pseudo === this.selectedPlayer.pseudo))
    {
      console.log('DEJA EXISTANT',this.selectedPlayer);
      this.test=true;
    }
    else {
      this.playerService.updatePlayer(this.selectedPlayer, this.selectedPlayer.id_player as bigint).subscribe({
        next: (updatedPlayer) => {

          console.log('Mise à jour réussie', updatedPlayer);
          this.players = this.players.map(_player =>
             _player.id_player === updatedPlayer.id_player ? updatedPlayer : _player
          );
        },
      });

    this.VerfiModif=false;
      this.test=false;
  }
  }


verification(): void
{
  if(this.players.find(player => player.pseudo === this.newPlayerPseudo))
  {
    this.newPlayerPseudo = '';
    this.verificationAjout=true;
  }
  else
  {
    this.verificationAjout=false;
  }
}
  verificationupdate():void
  {
    if(this.players.find(player => player.pseudo ==="" ))
    {
      this.newPlayerPseudo = '';
      this.verificationAjout=true;
    }
    else
    {
      this.verificationAjout=false;
    }
  }

}
