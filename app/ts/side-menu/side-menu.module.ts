import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { SideMenuComponent }   from './side-menu.component';


import { CategoriesProvider } from './categories-provider.service';

@NgModule({
    imports : [
        CommonModule, 
    ],
    declarations : [
        SideMenuComponent
    ],
    exports : [
        SideMenuComponent
    ],
    providers: [CategoriesProvider]
})

export class SideMenuModule { }
