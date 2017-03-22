import { Injectable } from '@angular/core';

@Injectable()
export class CategoriesService {

  constructor() { }

  getCategories()
  {
      return [
                  // mock data till getting it from Database
                  {name:'Electronics',path:'category_1',count:5},
                  {name:'Clothes',path:'category_2',count:2},
                  {name:'Tablets',path:'category_3',count:3},
                  {name:'PCs',path:'category_4',count:1},
                  {name:'Car Care',path:'category_5',count:5},
              ]
  }
}
