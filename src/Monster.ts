import Fighter, { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  protected _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    this._lifePoints -= attackPoints;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this.lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;