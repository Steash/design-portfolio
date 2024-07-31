import { Component } from '@angular/core';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { Illustration } from '../../models/illustration.model';

@Component({
  selector: 'app-illustration',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './illustration.component.html',
  styleUrl: './illustration.component.css'
})
export class IllustrationComponent {
  columnOneIllustrations: Illustration[] = [
    { imageGroup: [
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp', 
        'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
        'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
        'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
        'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
        'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
    ] },
    { imageGroup: [
      'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp', 
      'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
      'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
      'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
      'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
      'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
      'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
    ] },
  ]  

  columnTwoIllustrations: Illustration[] = [
    { imageGroup: [
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp', 
        'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
        'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
        'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
        'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
        'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
    ] },
    { imageGroup: [
      'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp', 
      'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
      'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
      'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
      'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
      'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
      'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
    ] },
  ]  

  columnThreeIllustrations: Illustration[] = [
    { imageGroup: [
        'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp', 
        'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
        'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
        'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
        'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
        'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
        'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
    ] },
    { imageGroup: [
      'https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp', 
      'https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp',
      'https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp',
      'https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp',
      'https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp',
      'https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp',
      'https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp'
    ] },
  ]  
}
