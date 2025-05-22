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
    },
    {
      title: 'New Orleans Beignets',
      description: 'Warm and sweet bread, paired perfectly with dusted sugar, inspired by New Orleans.',
      image: 'assets/beignets.jpg',
      ingredients: ['1/2 tsp dry yeast', '1/4 cup warm water', '1/4 cup sugar', '2 tbsp vegetable shortening', '1/2 tsp salt', '1/2 cup heavy cream', '1 egg', '4 cups all-purpose flour', '1/2 cup boiling water', 'vegetable oil for frying', 'powdered sugar'],
      instructions: [
        'Sprinkle yeast over warm water in a small bowl. Stir to dissolve',
        'Add sugar, shortening, salt heavy cream, egg, flour, yeast, and boiling water to a large bowl. Mix together',
        'Rest dough mixture for 30 minutes',
        'Roll out dough to 1/4-inch thickness and cut into individual squares. Let dough rise for 2 hous in a warm area',
        'Heat vegetable oil to 350 degrees and fry beignets for 2-3 minutes, or until golden brown',
        'Dust warm beignets with powdered sugar',
        'Enjoy!'
      ]
    },
    {
      title: 'French Toast',
      description: 'A french morning breakfast of sweet bread fried with egg and cinnamon.',
      image: 'assets/french-toast.jpg',
      ingredients: ['Bread slices','1 egg, whisked', '30 ml of milk','1/4 tsp cinnamon','1/4 tsp vanilla extract','Butter or oil for frying'],
      instructions:[
        'Mix the egg, milk, cinnamon, and vanilla extract together in a bowl',
        'Toast the bread slice until it is slightly brown',
        'Cover the bread with the mixture',
        'Fry the bread in a pan greased with butter or oil for 1-2 minutes on each side',
        'Add any toppings like brown sugar + cinnamon, honey, whipping cream, ice-cream, or fruit',
        'Enjoy!'
      ]
    },
    {
      title: 'Miso Egg Drop Soup',
      description: 'A savory, cozy soup consisting of miso and ribbons of egg, perfect for a sick day.',
      image: 'assets/miso-egg-drop.jpg',
      ingredients: ['4 cups chicken or vegetable broth','1/4 tsp salt','1/4 tsp garlic powder','1/4 tsp ground ginger','1/4-1/2 tsp turmeric (for color)','2 tbs cornstarch','3 tbs water','3 eggs, whisked','1/2 tsp of sesame oil','1 green onion for topping'],
      instructions:[
        'To a pot over medium heat, add the broth as well as seasonings and stir',
        'In a small bowl, mix the cornstarch and water to create a "slurry"',
        'Turn down the heat to low, start stirring with a spatula or chopsticks, then add the eggs slowly',
        'Mix in some sesame oil for more flavor and take the pot off the heat',
        'Top with chopped green onions',
        'Enjoy!'
      ]
    },
    {
      title: 'Buldak Soup Noodles',
      description: 'A spicy and soupy twist to the famous Buldak Carbonara Ramen.',
      image: 'assets/soupy-buldak.png',
      ingredients: ['200 ml chicken stock or vegetable stock','1 pack of Samyand Buldak Carbonara noodles','1 egg whisked','1 tbsp kewpie mayonnaise (or regular)'],
      instructions: [
        'Boil noodles in some boiling water in a pot',
        'Once soft and can untangle the noodles, add 100 ml of stock',
        'To a bowl, add the carbonara satchets (sauce and powder)',
        'Add the egg and kewpie mayo',
        'Mix well until it forms a paste, then add in the remaining 100 ml stock',
        'Once the noodles are cooked, add it to the sauce mixture',
        'Mix well and top with shopped coriander or spring onion and some chili oil',
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
