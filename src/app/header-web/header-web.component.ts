import { Component } from '@angular/core';
import { Icons } from '../icons/icons';
import { BehaviorSubject } from 'rxjs';
import { InputSearchComponent } from '../input-search/input-search.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-header-web',
  standalone: true,
  imports: [CommonModule, InputSearchComponent],
  templateUrl: './header-web.component.html',
  styleUrl: './header-web.component.css'
})
export class HeaderWebComponent {
  
  icons:Icons= {
    logo:'/assets/icons/Logo.svg',
    add: '/assets/icons/add2.svg',
    ava: '/assets/icons/AVA.svg',
    search: '/assets/icons/search.svg',
    notification:'/assets/icons/notifications.svg',
    notification_mobile:'/assets/icons/notifications-mobile.svg',
    contacts:'/assets/icons/contacts.svg',
    favorites:'/assets/icons/favorites.svg',
    link:'/assets/icons/link.svg',
    tag:'/assets/icons/tag.svg',
    history:'/assets/icons/history.svg',
    menu:'/assets/icons/menu.svg',
    arrow_back: '/public/assets/icons/arrow_back.svg'
  }
  

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
