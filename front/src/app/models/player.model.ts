import { Student } from "./student.model"

export interface Player {
  id_player?: bigint
  pseudo : string
  score : number
  classement : number
}
