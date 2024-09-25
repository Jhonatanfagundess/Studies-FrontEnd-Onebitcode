import { Character } from "./character";
export class Warrior extends Character{
    constructor(name,point_life,at,df,escudo,position){
        super(name,point_life,at,df)
        this.escudo = escudo
        this.position = position
    }

    atacar(target){
        if(this.position === 'Ataque'){
            if(this.at > target.df){
                const dif = this.at - target.df
                const dano = Math.max(0 ,dif)
                target.point_life -= dano
                 return `${target.name} recebeu danos : ${dano} e tem esses pontos de vida : ${target.point_life}`
             }else {
              return `A defesa do personagem é muito forte! 0 de dano`
             }
        }else if(this.position === 'Defesa'){
            const soma = this.escudo + target.df
            return `Você está na defesa! Seu escudo e sua defesa somam : ${soma}`
        }
    }

    position(){
        if(this.position === 'Ataque'){
            this.position = 'Defesa'
        }else{
            this.position ='Ataque'
        }
        return `A posição foi alterada para : ${this.position}`
    }
}