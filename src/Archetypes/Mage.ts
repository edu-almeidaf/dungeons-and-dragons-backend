import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

class Mage extends ArcheType {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;