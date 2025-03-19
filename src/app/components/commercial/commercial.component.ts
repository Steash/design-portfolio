import { Component } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';

@Component({
  selector: 'app-commercial',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './commercial.component.html',
  styleUrl: './commercial.component.css'
})
export class CommercialComponent {
  pdfUrl: string = 'pdfs/commercial-works.pdf'

  constructor(
  ) {}
}
