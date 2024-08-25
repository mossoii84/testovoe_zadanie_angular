import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-block-for-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-block-for-menu.component.html',
  styleUrl: './search-block-for-menu.component.css'
})
export class SearchBlockForMenuComponent {
    @Input() isOpen: boolean | undefined;
}
