import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  standalone: false,
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe: any;

  recipes = [
    {
      title: 'Chocolate Chip Cookie Cake',
      description: 'Pan-style chocolate chip cookie yummyness.',
      image: 'assets/chocolate-chip-cake.jpg',
      ingredients: ['1/2 cup melted butter', '1/2 cup brown sugar', '1/4 cup sugar', '1 egg', '1 tsp vaniall extract', '1/2 tsp baking soda', '1 1/2 cups flour', 'lots of chocolate chips'],
      instructions: [
        'Preheat the oven to 350F',
        'Melt the butter',
        'Add in the sugar and egg to whisk',
        'Mix in the flour until moldable',
        'Fold in the chocolate chips',
        'Flatten the dough into a pan until its layered about 1 cm thick',
        'Bake the cake for 25 minutes at 350F',
        'Enjoy!'
      ]
    },
    {
      title: 'Fudgey Brownies',
      description: 'Goeey-oeey chocolate goodness that just melts in your mouth.',
      image: 'assets/fudge-brownies.jpg',
      ingredients: ['2 eggs', '1/2 cup cocoa powder', '1/2 tsp salt', '1/2 tsp baking powder', '1 1/2 tsp vanilla extract', '1/2 cup unsalted butter (melted)', '1 cup sugar','3/4 cup flour', '2 tsp espresso powder','1 cup chocolate chips'],
      instructions: [
        'Preheat the oven at 350F',
        'Mix together the eggs, cocoa powder, salt, baking powder, instant espresso, and vanilla',
        'Combine the butter and sugar well, then add the flour and mix gently',
        'Add the chocolate chips and fold until combined',
        'Pour into a 9x9 pan and bake at 350F for 25-30 minutes',
        'Enjoy!'
      ]
    },
    {
      title: 'Mango Sticky Rice',
      description: 'Sweet rice dessert paired with mango slices or chunks.',
      image: 'assets/mango-sticky-rice.jpg',
      ingredients: ['1 cup dry glutinous rice','1 1/2 cup full fat cocunut milk','5-7 tbsp sugar','1/2 tsp salt','1 tsp corn starch','2 tsp water',
        '2 large ripe mangoes'],
        instructions: [
          'Wash the rice 3-4 times to remove starch. Leave to soak overnight for at least 8-24 hours',
          'Drain the water from the rice. Steam rice for 20-25 minutes or until rice is cooked',
          'In a large pan, heat the 1 cup of cocunut milk over medium high heat. Stir in the sugar (3-4 tbsp) and salt. Leave the cocunut milk to simmer over medium high heat until it boils',
          'Add in the steamed rice and cook down the rice until it has absorbed the cocunut milk and has thickened',
          'Turn off the heat and leave to cool for 5 minutes',
          'In the same pan over medium high heat, add 1/2 cup of coconut milk and stir in sugar (2-3 tbsp) until it boils',
          'Once it boils, lower the heat to medium',
          'Dilute the cornstarch with the water',
          'While stirring the coconut milk, pour in the cornstarcj mixture. Turn off the heat and keep stirring until it thickens',
          'In a plate, portion the rice and mangoes (in slices or cubes). Finish off by drizzling on some of the coconut sauce',
          'Enjoy!'
        ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const recipeTitle = this.route.snapshot.paramMap.get('title');
    this.recipe = this.recipes.find(r => r.title === recipeTitle);
  }
}
