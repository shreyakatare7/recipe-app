import { Component } from '@angular/core';

@Component({
  selector: 'app-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.css'],
  standalone: false
})
export class FinderComponent {
  searchTerm: string = ''; 
  foundRecipes: any[] = [];

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

  searchRecipes() {
    this.foundRecipes = this.allRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
