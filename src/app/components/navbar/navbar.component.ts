import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  stateScroll  = false;
  public option: string = 'home';
  
  constructor(private route: ActivatedRoute){}
  
  selectOption(option: string){
    this.option = option;
  }

  @HostListener('document:scroll')

  scrollFunction(){
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 10){
      this.stateScroll = true
    }else{
      this.stateScroll = false
    }
  }
}
