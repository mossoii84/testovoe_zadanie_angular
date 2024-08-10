import { Component } from '@angular/core';
import { Iconslist } from '../icons/icons-list';
import { Icons } from '../icons/icons';
import { BehaviorSubject } from 'rxjs';
import { InputMobileSearchComponent } from '../input-mobile-search/input-mobile-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, InputMobileSearchComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.css'
})
export class HeaderMobileComponent {


icons:Icons= {
  logo: '/assets/icons/Logo.svg',
  add: '/assets/icons/add2.svg',
  ava: '/assets/icons/AVA.svg',
  search: '/assets/icons/search.svg',
  notification: '/assets/icons/notifications.svg',
  notification_mobile:'/assets/icons/notifications-mobile.svg',
  contacts: '/assets/icons/contacts.svg',
  favorites: '/assets/icons/favorites.svg',
  link: '/assets/icons/link.svg',
  tag: '/assets/icons/tag.svg',
  history: '/assets/icons/history.svg',
  menu: '/assets/icons/menu.svg',
  arrow_back: '/public/assets/icons/arrow_back.svg'
}


public isOpenMobileSearch$ = new BehaviorSubject<boolean>(true);
public isOpenMenu$ = new BehaviorSubject<boolean>(false);


isOpenSearch(){
  this.isOpenMobileSearch$.next(!this.isOpenMobileSearch$.value)
  console.log(this.isOpenMobileSearch$.value)
}

isOpenMenu(){
  // this.isOpenMenu$.next(!this.isOpenMenu$.value)
  console.log("menu-" , this.isOpenMenu$.value)
}


}
