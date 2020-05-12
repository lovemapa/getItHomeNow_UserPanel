import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import * as $ from 'jquery';
import { NavbarComponent } from 'src/app/componentPackage/navbar/navbar.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {

  Tag = "FullComponent";
  @ViewChild(NavbarComponent, { read: true, static: false }) navbar: NavbarComponent;
  url: string;
  constructor(private renderer: Renderer2, private element: ElementRef, private router: Router) {
    // CommonMethods.showLog(this.Tag,'Window Resolution :'+window.innerWidth)
    this.url = this.router.url
    // console.log("constructor is working:- "+this.url)
  }

  ngOnInit(): void {
    // console.log("on  ngOnInit  working")
  if(this.url != "/delivery"){
    var navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
    this.renderer.listen('window', 'scroll', (event) => {
      const number = window.scrollY;
      if (number > 350 || window.pageYOffset > 350) {
        // add logic
        navbar.classList.remove('navbar-transparent');
        document.getElementById("myBtn").style.display = "block";
        document.getElementById("myBtn").classList.add("lightSpeedIn");
        document.getElementById("myBtn").classList.remove("lightSpeedOut");
        // document.getElementById("bounce").classList.add("bounceIn");

      } else {
        navbar.classList.add('navbar-transparent');
        document.getElementById("myBtn").classList.remove("lightSpeedIn");
        document.getElementById("myBtn").classList.add("lightSpeedOut");
      }
    });
    navbar.scrollIntoView({ behavior: "smooth", block: "start" })
    var sections = $('section')
      , nav = $('nav')
      , nav_height = nav.outerHeight();
    $(window).on('scroll', function () {
      var cur_pos = $(this).scrollTop();
      //  CommonMethods.showLog(this.Tag,"cur_pos:- "+cur_pos);
      sections.each(function () {
        // sections.addClass('active');
        // nav.find('a').addClass('active')
        var top = $(this).offset().top - nav_height,
          bottom = top + $(this).outerHeight();
        // CommonMethods.showLog(this.Tag,"top:- "+top);
        // CommonMethods.showLog(this.Tag,"bottom:- "+bottom);

        if (cur_pos >= top && cur_pos <= bottom) {
          nav.find('a').removeClass('active');
          sections.removeClass('active');

          $(this).addClass('active');
          nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');

          $("#mytoggle").attr("aria-expanded", "false");
          document.getElementById('probootstrap-navbar').classList.remove('show')
          document.getElementById('mytoggle').classList.add('collapsed')
          document.getElementById('probootstrap-navbar').style.display = "none"
        }
      });
    });


    // if( this.router.url == "/advertisment" || this.router.url != "/advertisment"){
    nav.find('a').on('click', function () {
      var $el = $(this)
      var id: string = $el.attr('href');
      // if(this.url == "/advertisment"){
      if (id.includes("/")) {
        var newid = id.split("/");
        var ID = newid[0] + newid[1];
        // console.log("$id :- " + ID);
        window.scrollTo(0, 0)
      } else {
        var ID = id;
        // console.log("else is working")
        $('html, body').animate({
          scrollTop: $(ID).offset().top - nav_height + 10
        }, 0);
      }
     
      
    
      // }else{

      // }
      return false;
    });
    // }else{
    // console.log("Show Function else working")
    // nav.find('a').on('click', function () {
    //   var $el = $(this)
    //     , id = $el.attr('href');
    //   $('html, body').animate({
    //     scrollTop: $(id).offset().top - nav_height+10

    //   }, 0);
    //   return false;
    // });
    // }




    nav.find('a').on('click', function () {
      $('.navbar-collapse').hide();
      $("#mytoggle").attr("aria-expanded", "false");
      document.getElementById('probootstrap-navbar').classList.remove('show')
      document.getElementById('mytoggle').classList.add('collapsed')
      document.getElementById('probootstrap-navbar').style.display = "none"
      // document.getElementById('probootstrap-navbar').style.background="initial"

    });
    nav.find('#mytoggle').on('click', function () {
      //  CommonMethods.showLog(this.Tag,'aria Value : '+$("#mytoggle").attr("aria-expanded"))
      if ($("#mytoggle").attr("aria-expanded") == 'true') {
        document.getElementById('probootstrap-navbar').style.display = "none"
        // document.getElementById('probootstrap-navbar').style.background="initial"
        //  CommonMethods.showLog(this.Tag,'If working')

      } else {
        // CommonMethods.showLog(this.Tag,'else working')

        document.getElementById('probootstrap-navbar').style.display = "unset"
        // document.getElementById('probootstrap-navbar').style.background="rgba(44, 154, 155, 0.47)"
      }
    });
  }
    
  }

}
