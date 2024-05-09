export interface Game {
  id_game?: bigint
  id_p1?: bigint
  p1_score?:number
  id_p2?: bigint
  p2_score?:number
  id_p3?: bigint | null
  p3_score?:number | null
  id_p4?: bigint | null
  p4_score?:number | null
  id_cat?: number
}
