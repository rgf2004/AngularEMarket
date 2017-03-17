import { Component }            from '@angular/core';  

import { CategoriesProvider }   from './categories-provider.service';

import { ContentDivComponent }  from '../content-div/content-div.component';

@Component({
  selector: 'side-menu',
  templateUrl: 'app/html/side-menu/side-menu.component.html'
})

export class SideMenuComponent {

  categories ;
  message;

  constructor(private _categoriesProvider : CategoriesProvider, private _contentDivComponent : ContentDivComponent){
      this.categories = _categoriesProvider.getCategories();
  }

  categoryClicked(categoryName)
  {

    this.message = categoryName;

    //this._contentDivComponent.renderContent(categoryName);
  }

}