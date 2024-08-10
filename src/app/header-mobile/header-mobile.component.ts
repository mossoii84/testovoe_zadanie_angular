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

  contacts: '/assets/icons/contacts.svg',
  favorites: '/assets/icons/favorites.svg',
  link: '/assets/icons/link.svg',
  tag: '/assets/icons/tag.svg',
  history: '/assets/icons/history.svg',
  menu: '/assets/icons/menu.svg',

}


public isOpenSearch$ = new BehaviorSubject<boolean>(true);
public isOpenMenu$ = new BehaviorSubject<boolean>(true);


isOpenSearch(){
  this.isOpenSearch$.next(!this.isOpenSearch$.value)
  console.log(this.isOpenSearch$.value)
}
isOpenMenu(){
  this.isOpenSearch$.next(!this.isOpenMenu$.value)
  console.log("menu-" , this.isOpenMenu$.value)
}


}
