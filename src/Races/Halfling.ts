import Race from './Race';

class Halfling extends Race {
  private _lifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._instances += 1;
    this._lifePoints = 60;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._instances;
  }
}

export default Halfling;