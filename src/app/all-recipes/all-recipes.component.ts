import { Component } from '@angular/core';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.css'],
  standalone: false,
})
export class AllRecipesComponent {
  allRecipes = [
    {
      title: 'Chocolate Chip Cookie Cake',
      description: 'Pan-style chocolate chip cookie yummyness.',
      image: 'assets/chocolate-chip-cake.jpg'
    },
    {
      title: 'Fudgey Brownies',
      description: 'Goeey-oeey chocolate goodness that just melts in your mouth.',
      image: 'assets/fudge-brownies.jpg'
    },
    {
      title: 'Mango Sticky Rice',
      description: 'Sweet rice dessert paired with mango slices or chunks.',
      image: 'assets/mango-sticky-rice.jpg'
    }
  ];
}
