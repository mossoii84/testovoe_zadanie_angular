import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-mobile-search',
  standalone: true,
  imports: [],
  templateUrl: './input-mobile-search.component.html',
  styleUrl: './input-mobile-search.component.css'
})
export class InputMobileSearchComponent {
  @Input() isOpen: boolean | undefined;

  
}
