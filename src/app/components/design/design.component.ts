import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {

}
