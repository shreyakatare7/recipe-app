import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredRecipes = [
    {
      title: 'New Orleans Beignets',
      description: 'Warm and sweet bread, paired perfectly with dusted sugar, inspired by the famous New Orleans.',
      image: 'assets/beignets.jpg'
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
    }
  ];  
}

