import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

class Warrior extends ArcheType {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;