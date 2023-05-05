import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  linksTitle = "My Favorite Links!";
  links = ['https://www.pinterest.com', 'https://www.tiktok.com/'];
  constructor() { }

  ngOnInit() {
  }

}
