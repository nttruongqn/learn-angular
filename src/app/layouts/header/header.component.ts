import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuItems = [
    { linkId: 1, linkName: 'Home', linkUrl: '/' },
    { linkId: 2, linkName: 'Product', linkUrl: 'products' },
    { linkId: 3, linkName: 'Contacts', linkUrl: 'about' },
  ]

  constructor() { }

  ngOnInit() {

  }

}
