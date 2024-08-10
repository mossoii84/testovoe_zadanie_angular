import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { InputSearchComponent } from '../input-search/input-search.component';
import { HeaderWebComponent } from '../header-web/header-web.component';
import { HeaderMobileComponent } from '../header-mobile/header-mobile.component';
import { BreakpointObserver, Breakpoints, BreakpointState, LayoutModule} from '@angular/cdk/layout';
import { Icons } from '../icons/icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, InputSearchComponent, HeaderWebComponent, HeaderMobileComponent, LayoutModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {


  // Breakpoints = Breakpoints;
  currentBreakpoint:number = 0;
  constructor(private breakpointObserver: BreakpointObserver) { }

  private subscription!: Subscription;
  
  ngOnInit() {
          this.subscription = this.breakpointObserver
            .observe(['(min-width: 414px)'])
            .subscribe((state: BreakpointState) => {
              if (state.matches) {
                this.currentBreakpoint = 0;
                console.log('++500px ');
              } else {
                this.currentBreakpoint = 1;
                console.log('--500px');
              }
            });
        }



        ngOnDestroy(): void {
          this.subscription?.unsubscribe();
        }
      

  }
    









  // icons:Icons= {
  //   logo:'/assets/icons/Logo.svg',
  //   add: '/assets/icons/Add.png',
  //   ava: '/assets/icons/Ava.png',
  //   search: '/assets/icons/Search.png',
  //   notification:'/assets/icons/Notifications.png',

  //   contacts:'/assets/icons/contacts.svg',
  //   favorites:'/assets/icons/favorites.svg',
  //   link:'/assets/icons/link.svg',
  //   union:'/assets/icons/union.svg',
  //   history:'/assets/icons/history.svg',
  // }


  // public isOpenSearch$ = new BehaviorSubject<boolean>(true);

  // isOpenSearch(){
  //   this.isOpenSearch$.next(!this.isOpenSearch$.value)
  //   console.log(this.isOpenSearch$.value)
  // }


