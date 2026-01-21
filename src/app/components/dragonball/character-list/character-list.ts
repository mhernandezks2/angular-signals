import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import type { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [NgClass],
  templateUrl: './character-list.html',
})
export class CharacterList {
  getPowerClass(power: number): string {
    if (power > 9000) {
      return 'bg-danger';
    } else if (power > 5000) {
      return 'bg-warning';
    } else {
      return 'bg-info';
    }
  }
  characters = input.required<Character[]>();
  listName = input<string>();

  get listNameOrDefault(): string {
    return this.listName() ?? 'Default List Name';
  }
}
