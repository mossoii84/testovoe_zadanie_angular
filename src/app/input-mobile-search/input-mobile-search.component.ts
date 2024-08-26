import { Component, Input } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Iconslist } from '../icons/icons-list';
import { SearchBlockForMenuComponent } from '../search-block-for-menu/search-block-for-menu.component';

@Component({
  selector: 'app-input-mobile-search',
  standalone: true,
  imports: [CommonModule, SearchBlockForMenuComponent],
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
