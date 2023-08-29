import Race from './Race';

class Elf extends Race {
  private _lifePoints: number;
  private static _instances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._instances += 1;
    this._lifePoints = 99;
  }

  get maxLifePoints(): number {
    return this._lifePoints;
  }

  static createdRacesInstances(): number {
    return Elf._instances;
  }
}

export default Elf;