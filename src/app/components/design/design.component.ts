import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { Design } from '../../models/design.model';

@Component({
  selector: 'app-design',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './design.component.html',
  styleUrl: './design.component.css'
})
export class DesignComponent {
  designs: Design[] = [
    {
      title: 'Title Work',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, atque totam? Sequi voluptas natus necessitatibus, ex labore cupiditate, magni provident maxime qui iste id ipsa praesentium cumque vel blanditiis porro!',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
      title: 'Title Work',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, atque totam? Sequi voluptas natus necessitatibus, ex labore cupiditate, magni provident maxime qui iste id ipsa praesentium cumque vel blanditiis porro!',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    },
    {
      title: 'Title Work',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, atque totam? Sequi voluptas natus necessitatibus, ex labore cupiditate, magni provident maxime qui iste id ipsa praesentium cumque vel blanditiis porro!',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
    }
  ]
}
