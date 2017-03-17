import { Component } from '@angular/core';
@Component({
  selector: 'content-div',
  templateUrl: 'app/html/content-div/content-div.component.html'
})

export class ContentDivComponent
{
  
  message : string = "Hello" ;

  renderContent(_message)
  {
    console.log(this);
    this.message = _message;
    console.log(this.message);
  }
}