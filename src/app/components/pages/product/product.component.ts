import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  prod:any

  constructor(private _httpClient:HttpClient) { }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts(){
    this._httpClient.get("assets/data/product.json").subscribe((r:any) => {
      console.log(r)
      // console.log(typeof r)
      this.prod=r;
    })
  }

}
