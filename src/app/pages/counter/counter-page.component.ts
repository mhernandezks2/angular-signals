import { ChangeDetectionStrategy, Component, signal } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html',
  styles: [`
    button{
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPageComponent {
  counter = 0;
  counterSignal = signal(10);

  constructor() {
    setInterval(() => {
      this.counterSignal.update( current => current + 1 );
      console.log('Tick', this.counterSignal());
    }, 2000);
  }

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update( current => current + value );
  }

  decreaseBy(value: number) {
    if (this.counter === 0) return;
    this.counter += value;
    this.counterSignal.update( current => current + value );
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
