import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributedirective',
  templateUrl: './attributedirective.component.html',
  styleUrls: ['./attributedirective.component.css']
})
export class AttributedirectiveComponent implements OnInit {
  attributeDirective:any
  constructor() { 
    this.attributeDirective = ["ngStyle", "ngClass", "styleClass", "ngModel","src", "href", "disable", "value", "etc"]
  }

  ngOnInit(): void {
  }

}
