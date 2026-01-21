import { NgClass } from "@angular/common";
import { Component, computed, signal } from "@angular/core";

interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  selector: 'app-dragonball-page',
  templateUrl: './dragonball-page.component.html',
  imports: [NgClass],
})
export class DragonballPageComponent {

  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
  ]);

  getPowerClass(power: number): string {
    if (power > 9000) {
      return 'bg-danger';
    } else if (power > 5000) {
      return 'bg-warning';
    } else {
      return 'bg-info';
    }
  }

  addCharacter(): void {
    if(!this.name() || this.power() <= 0) return;
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };
    this.characters.update(characters => [...characters, newCharacter]);
    this.name.set('');
    this.power.set(0);
  }
}
