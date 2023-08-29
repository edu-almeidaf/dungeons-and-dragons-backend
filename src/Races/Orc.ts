import Race from './Race';

class Orc extends Race {
  private _lifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._instances += 1;
    this._lifePoints = 74;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._instances;
  }
}

export default Orc;