import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  country:String[];
  title = "Welcome to  Angular";
  message="Welcome";
  constructor() { 
    this.country = ["India", "Usa", "United Kingdom", "Switjerland"]
  }

  ngOnInit(): void {
  }

}
