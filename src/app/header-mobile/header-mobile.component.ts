import { Component } from '@angular/core';
import { Iconslist } from '../icons/icons-list';
import { BehaviorSubject } from 'rxjs';
import { InputMobileSearchComponent } from '../input-mobile-search/input-mobile-search.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header-mobile',
  standalone: true,
  imports: [CommonModule, InputMobileSearchComponent],
  templateUrl: './header-mobile.component.html',
  styleUrl: './header-mobile.component.css',
})
export class HeaderMobileComponent {
  icons = Iconslist;

  public isOpenMobileSearch$ = new BehaviorSubject<boolean>(true);
  public isOpenMenu$ = new BehaviorSubject<boolean>(false);
  Iconslist: any;

  isOpenSearch() {
    this.isOpenMobileSearch$.next(!this.isOpenMobileSearch$.value);
  }
}
