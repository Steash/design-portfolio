import { Component } from '@angular/core';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-commercial',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './commercial.component.html',
  styleUrl: './commercial.component.css'
})
export class CommercialComponent {

}
