import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  standalone: false,
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
}
