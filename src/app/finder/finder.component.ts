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
    },
    {
      title: 'New Orleans Beignets',
      description: 'Warm and sweet bread, paired perfectly with dusted sugar, inspired by New Orleans.',
      image: 'assets/beignets.jpg',
    },
    {
      title: 'French Toast',
      description: 'A french morning breakfast of sweet bread fried with egg and cinnamon.',
      image: 'assets/french-toast.jpg'
    },
    {
      title: 'Miso Egg Drop Soup',
      description: 'A savory, cozy soup consisting of miso and ribbons of egg, perfect for a sick day.',
      image: 'assets/miso-egg-drop.jpg'
    },
    {
      title: 'Buldak Soup Noodles',
      description: 'A spicy and soupy twist to the famous Buldak Carbonara Ramen.',
      image: 'assets/soupy-buldak.png'
    }
  ];

  searchRecipes() {
    this.foundRecipes = this.allRecipes.filter(recipe => 
      recipe.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
