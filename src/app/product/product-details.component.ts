import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IProduct } from './product';
import { DemoDataService } from '../shared/demo-data.service';

@Component({
  templateUrl: './app/product/product-details.component.html'

})

export class ProductDetailsComponent {
  productid: number;
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _demoDataService: DemoDataService) {

  }

  ngOnInit() {
    this.productid = +this._route.snapshot.params['id'];
    this.product = this._demoDataService.getDemoDataById(this.productid);
  }
}
