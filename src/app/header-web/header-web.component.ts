import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InputSearchComponent } from '../input-search/input-search.component';
import { CommonModule } from '@angular/common';
import { Iconslist } from '../icons/icons-list';


@Component({
  selector: 'app-header-web',
  standalone: true,
  imports: [CommonModule, InputSearchComponent],
  templateUrl: './header-web.component.html',
  styleUrl: './header-web.component.css'
})
export class HeaderWebComponent {
  
  icons = Iconslist;

  public isOpenSearch$ = new BehaviorSubject<boolean>(true);

  isOpenSearch(){
    this.isOpenSearch$.next(!this.isOpenSearch$.value)
    console.log(this.isOpenSearch$.value)
  }



  isCloseSearch() {
      setTimeout(() => {
        this.isOpenSearch();
      }, 1000);
    
  }



}
