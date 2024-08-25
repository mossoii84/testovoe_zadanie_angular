import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Iconslist } from '../icons/icons-list';
@Component({
  selector: 'app-input-mobile-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-mobile-search.component.html',
  styleUrl: './input-mobile-search.component.css',
})
export class InputMobileSearchComponent {
  @Input() isOpenMobileSearch: boolean | undefined;
  icons = Iconslist;

  isCloseMobilMenu() {
    if (!this.isOpenMobileSearch) {
      this.isOpenMobileSearch = true;
    }
  }
}
