import { EnergyType } from '../Energy';
import ArcheType from './Archetype';

class Ranger extends ArcheType {
  private static _instances = 0;
  private _energyType: EnergyType;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._instances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;