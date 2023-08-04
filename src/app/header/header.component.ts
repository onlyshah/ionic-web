import { Component, OnInit ,Renderer2} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  constructor(
    private renderer: Renderer2
  ) { }
  addGlobalCssClass(className: string) {
    this.renderer.addClass(document.body, className);
  }

  removeGlobalCssClass(className: string) {
    this.renderer.removeClass(document.body, className);
  }
  ngOnInit() {
   
  }
  onLinkClick() {
    // Add a CSS class to the global stylesheet
    // this.addGlobalCssClass('mobile-nav-active');
    this.removeGlobalCssClass('mobile-nav-active');

    // Remove a CSS class from the global stylesheet after a delay
    setTimeout(() => {
      this.addGlobalCssClass('mobile-nav-active');
    }, 2000);
  }
}



