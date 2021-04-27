import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
  
    {'image': 'https://www.sunsetgrown.com/wp-content/uploads/2020/10/WWPeppersPizza_001.png'},
    {'image': 'https://www.mensjournal.com/wp-content/uploads/2019/07/pizza-wine.jpg?w=1200&h=630&crop=1&quality=86&strip=all'}, 
    {'image': 'https://winecountrytable.com/wp-content/uploads/2019/09/Jordan-Winery-Citrus-Herb-Mushroom-Infused-Olive-Oil-Recipes-4579-WEB-SIZE-1600x950.jpg'}, 
    {'image': 'https://sgl-assets.imgix.net/files/article_hero/italian-agriturismo-tuscany-italy-farm-stays-via-magazine-shutterstock_393423898.jpg?w=1440&h=720&crop=faces,edges'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
