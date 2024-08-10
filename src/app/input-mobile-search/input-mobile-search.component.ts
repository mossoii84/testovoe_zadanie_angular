import { Component, Input, OnInit } from '@angular/core';
import { Icons } from '../icons/icons';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-input-mobile-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-mobile-search.component.html',
  styleUrl: './input-mobile-search.component.css'
})
export class InputMobileSearchComponent  implements OnInit {

  @Input() isOpenMobileSearch: boolean | undefined;
  icons: any;


  ngOnInit(): void {
     console.log(this.isOpenMobileSearch)
  }


}
