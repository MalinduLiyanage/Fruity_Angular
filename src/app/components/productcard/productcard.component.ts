import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productcard',
  imports: [],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
  @Input() buttonText: string = 'Buy Now !';
}
