import { Character } from './character.js';
import { Mage } from './mage.js';
import { Warrior } from './warrior.js';
import { Thief } from './thief.js';

// Criando instâncias de Warrior
const warrior1 = new Warrior('Guerreiro 1', 100, 20, 10, 5, 'Ataque');
const warrior2 = new Warrior('Guerreiro 2', 80, 15, 12, 3, 'Defesa');

// Testando o ataque entre guerreiros
console.log(warrior1.atacar(warrior2)); // Ataca Guerreiro 2
console.log(warrior2.position()); // Altera a posição de Guerreiro 2

// Criando instâncias de Mage
const mage1 = new Mage('Mago 1', 60, 25, 8, 15);
const mage2 = new Mage('Mago 2', 50, 18, 10, 12);

// Testando o ataque de um mago
console.log(mage1.atacar(warrior1)); // Mago ataca Guerreiro 1
console.log(mage1.aumentarLife(warrior1)); // Aumenta a vida do Guerreiro 1

// Criando instâncias de Thief
const thief1 = new Thief('Ladrão 1', 70, 22, 9);
const thief2 = new Thief('Ladrão 2', 65, 18, 10);

// Testando o ataque de um ladrão
console.log(thief1.atacar(warrior2)); // Ladrão ataca Guerreiro 2

// Exibindo a vida dos personagens após as interações
console.log(`Pontos de vida de ${warrior1.name}: ${warrior1.point_life}`);
console.log(`Pontos de vida de ${warrior2.name}: ${warrior2.point_life}`);
console.log(`Pontos de vida de ${mage1.name}: ${mage1.point_life}`);
console.log(`Pontos de vida de ${thief1.name}: ${thief1.point_life}`);
