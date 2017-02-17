import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { DemoDataService } from '../shared/demo-data.service';

@Component({
  selector: 'product-list',
  templateUrl: './app/product/product-list.component.html'
})
export class ProductListComponent implements OnInit{
  products: IProduct[];

  constructor(private demoDataService: DemoDataService ) {
  }
  ngOnInit() {
    this.products = this.demoDataService.getDemoData();
  }
}
