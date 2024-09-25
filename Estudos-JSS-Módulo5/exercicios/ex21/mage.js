import { Character } from "./character";
export class Mage extends Character{
    constructor(point_mage,name,point_life,at,df){
        super(name,point_life,at,df)
        this.point_mage = point_mage
    }

    atacar(target){
        if(this.at > target.df){
            const soma = this.at + this.point_mage
            const dif = soma - target.df
            const dano = Math.max(0 ,dif)
            target.point_life -= dano
             return `${target.name} recebeu danos : ${dano} e tem esses pontos de vida : ${target.point_life}`
         }else {
          return `A defesa do personagem é muito forte! 0 de dano`
         }
    }

    aumentarLife(target){
        const life = this.point_mage * 2
       target.point_life += life
       return `Os pontos de vida do ${target.name} aumentaram em ${life}`
    }
}