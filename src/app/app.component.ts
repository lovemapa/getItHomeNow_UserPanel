import { Component, Inject } from '@angular/core';
import { AosToken } from './aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GetItHomeNowUserUi';
  constructor(@Inject(AosToken) aos){
    // CommonMethods.showLog(this.Tag,'Window Resolution :'+window.innerWidth)
    aos.init();
    aos.init({ disable: 'tablet' });
  }

  

  ngOnInit(){
  }
  
 
   
  
  
 backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  
}

}
