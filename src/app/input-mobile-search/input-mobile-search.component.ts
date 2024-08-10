import { Component, Input, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Iconslist } from '../icons/icons-list';
@Component({
  selector: 'app-input-mobile-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-mobile-search.component.html',
  styleUrl: './input-mobile-search.component.css'
})
export class InputMobileSearchComponent  implements OnInit {

  @Input() isOpenMobileSearch: boolean | undefined;
  icons = Iconslist;


  ngOnInit(): void {
     console.log(this.isOpenMobileSearch)
  }

  isCloseMobilMenu() {
    if(!this.isOpenMobileSearch){
      this.isOpenMobileSearch = true;
      console.log(this.isOpenMobileSearch)
    }
  }



}
