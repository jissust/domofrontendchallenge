import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './case-studies.component.html',
  styleUrl: './case-studies.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CaseStudiesComponent {
 
  public breakpoints = {
  768:{
    slidesPerView: 5
  }
 } 
}
