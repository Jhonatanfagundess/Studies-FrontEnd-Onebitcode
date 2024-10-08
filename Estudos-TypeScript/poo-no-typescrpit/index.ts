class Spaceship {
    private _name : string
    protected captain : string
    protected speed : number

    get name() {
        return this._name
      }
    
      set name(name: string) {
        this._name = name
      }

    constructor(name, captain) {
      this.name = name
      this.captain = captain
      this.speed = 0
    }
  
    accelerate(rate, time) {
      this.speed = rate * time
    }
  }
  
  class Fighter extends Spaceship {
    public weapons
    constructor(name, captain, weapons) {
      super(name, captain)
      this.weapons = weapons
    }
  
    shoot() {
      for (let i = 0; i < this.weapons; i++) {
        console.log('Pew!')
      }
    }
  
    erase() {
        this.name = ''
      this.captain = ''
    }
  }
  
  let ship = new Spaceship('USS Enterprise', 'James T. Kirk')
  

  ship.accelerate(50, 10)
  ship.name = 'Jhonatan'
