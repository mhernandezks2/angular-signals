import { Component, inject, signal } from "@angular/core";
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { Character } from "../../interfaces/character.interface";
import { CharacterAdd } from "../../components/dragonball/character-add/character-add/character-add";
import { DragonballService } from '../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super-page',
  templateUrl: './dragonball-super-page.component.html',
  imports: [CharacterList, CharacterAdd],
})
export class DragonballPageSuperComponent {
  public dragonballService = inject(DragonballService);
}
