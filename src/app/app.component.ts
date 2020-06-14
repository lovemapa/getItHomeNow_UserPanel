import { Component, Inject } from '@angular/core';
import { AosToken } from './aos';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetItHomeNowUserUi';
  hidegoTopBar = true
  constructor(@Inject(AosToken) aos, public router: Router) {
    // CommonMethods.showLog(this.Tag,'Window Resolution :'+window.innerWidth)
    aos.init();
    aos.init({ disable: 'tablet' });
    // this.router(Navbar{

    // })

    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {

        if (this.router.url == "/delivery") {
         
          this.hidegoTopBar = false;
        }else{
          
        }
      }
    })
    if (this.router.url == "/delivery") {
     
     this.hidegoTopBar = false;
   }
    
  }



  ngOnInit() {
  }





  backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }

}
