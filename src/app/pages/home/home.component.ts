import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductcardComponent } from '../../components/productcard/productcard.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FooterComponent, ProductcardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
