import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SearchBlockForMenuComponent } from "../search-block-for-menu/search-block-for-menu.component";

@Component({
  selector: 'app-input-search',
  standalone: true,
  imports: [CommonModule, SearchBlockForMenuComponent],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.css'
})
export class InputSearchComponent {
   @Input() isOpen: boolean | undefined;

}
