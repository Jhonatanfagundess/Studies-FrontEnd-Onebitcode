export class Character{
    constructor(name,point_life,at,df){
        this.name= name
        this.point_life = point_life
        this.at = at
        this.df = df
    }

    atacar(target){
       if(this.at > target.df){
          const dif = this.at - target.df
          const dano = Math.max(0 ,dif)
          target.point_life -= dano
           return `${target.name} recebeu danos : ${dano} e tem esses pontos de vida : ${target.point_life}`
       }else {
        return `A defesa do personagem é muito forte! 0 de dano`
       }
    }
}


