import { NgModule }      from '@angular/core';
import { ContentDivComponent }   from './content-div.component';


@NgModule({
    declarations : [
        ContentDivComponent
    ],
    exports : [
        ContentDivComponent
    ]
})

export class ContentDivModule { }
