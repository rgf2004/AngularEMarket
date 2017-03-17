import { Component } from '@angular/core';  

import { CategoriesProvider } from './categories-provider.service';

@Component({
  selector: 'side-menu',
  templateUrl: 'app/html/side-menu/side-menu.component.html'
})

export class SideMenuComponent {

  categories ;

  constructor(private _categoriesProvider : CategoriesProvider){
      this.categories = _categoriesProvider.getCategories();
  }

}