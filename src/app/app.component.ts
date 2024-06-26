import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { TechnologyComponent } from './pages/technology/technology.component';
import { CaseStudiesComponent } from './pages/case-studies/case-studies.component';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent, OurServicesComponent, TechnologyComponent, CaseStudiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title = 'domofrontendchallenge';
  ngOnInit(): void {
    AOS.init({disable: 'mobile'});
    AOS.refresh();      
  }
}
