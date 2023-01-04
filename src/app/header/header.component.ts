import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

@Output()   isToggle= new EventEmitter()

  toggle()
  {
this.isToggle.emit()
//fit every conent in screeen after toggling
setTimeout(()=> {
window.dispatchEvent(
  new Event('resize')
)
},300);
  }
}
