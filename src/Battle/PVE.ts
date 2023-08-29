import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _player1: Fighter;
  private _player2: SimpleFighter[] | Fighter[];

  constructor(player1: Fighter, player2: SimpleFighter[] | Fighter[]) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  public get player1(): Fighter {
    return this._player1;
  }

  public get player2(): Fighter[] | SimpleFighter[] {
    return [...this._player2];
  }

  fight(): number {
    let isEnemiesExists;

    do {
      this.player2.forEach((p) => {
        this._player1.attack(p);
        p.attack(this.player1);
      });
      isEnemiesExists = this.player2.some((p) => p.lifePoints > 0);
    } while (!isEnemiesExists);

    return super.fight();
  }
}

export default PVE;