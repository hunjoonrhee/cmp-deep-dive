import {
  Component,
  ElementRef,
  HostListener,
  inject,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
  },
})
export class ControlComponent {
  @HostListener('click') onClick() {
    console.log('Clicked');
    console.log(this.el);
  }
  private el = inject(ElementRef);
  label = input.required<string>();
}
