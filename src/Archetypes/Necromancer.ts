import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

class Necromancer extends ArcheType {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;