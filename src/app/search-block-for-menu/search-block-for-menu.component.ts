import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Импортируйте FormsModule

@Component({
  selector: 'app-search-block-for-menu',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './search-block-for-menu.component.html',
  styleUrl: './search-block-for-menu.component.css'
})
export class SearchBlockForMenuComponent {

    @Input() isOpenMobileSearch: boolean | undefined;
    checkboxStates: { [key: string]: boolean } = {};



    onCheckboxChange(event: Event, idName:string): void {
      const checkbox = event.target as HTMLInputElement;
      this.checkboxStates[idName] = checkbox.checked;
      console.log(`Checkbox ${idName} is ${checkbox.checked ? 'checked' : 'unchecked'}`);     
    }


}
