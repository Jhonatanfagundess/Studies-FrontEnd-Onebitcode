import { Spaceship } from "./index";
import * as _lodash from 'lodash';



interface AttackSpaceship extends Spaceship {
    weapons: number
  }
  
  let xwing: AttackSpaceship = {
    name: 'X-Wing',
    pilot: 'Luke Skywalker',
    speed: 50,
    weapons: 4
}


