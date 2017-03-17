import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { SideMenuComponent }   from './side-menu.component';


import { CategoriesProvider }   from './categories-provider.service';
import { ContentDivComponent }  from '../content-div/content-div.component';

@NgModule({
    imports : [
        CommonModule
    ],
    declarations : [
        SideMenuComponent
    ],
    exports : [
        SideMenuComponent
    ],
    providers: [CategoriesProvider, ContentDivComponent]
})

export class SideMenuModule { }
