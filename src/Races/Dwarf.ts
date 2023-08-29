import Race from './Race';

class Dwarf extends Race {
  private _lifePoints: number;
  private static _instances = 0;
  
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._instances += 1;
    this._lifePoints = 80;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._instances;
  }
}

export default Dwarf;