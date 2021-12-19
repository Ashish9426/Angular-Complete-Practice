import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faSignInAlt=faSignInAlt;
  faUserPlus=faUserPlus;
  src = "https://www.chetu.com/img/chetu-logo-white.png"

  constructor() { }

  ngOnInit(): void {
  }

}
