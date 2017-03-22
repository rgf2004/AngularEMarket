import { Component, OnInit } from '@angular/core';

import { CategoriesService } from '../../app/categories/categories.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  categories ;
  message;

  constructor(private _categoriesService : CategoriesService) { 
    this.categories = _categoriesService.getCategories();
  }

  ngOnInit() {
  }

  categoryClicked(categoryName)
  {

    this.message = categoryName;

    //this._contentDivComponent.renderContent(categoryName);
  }

}
