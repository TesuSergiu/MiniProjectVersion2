import { Injectable } from '@angular/core';
import { PRODUCTDATA } from './data';
import { IProduct } from '../product/product';

@Injectable()
export class DemoDataService {
  getDemoData() : IProduct[] {
    return PRODUCTDATA;
  }

  getDemoDataById(productid: number) {
    return PRODUCTDATA.find(r => r.id == productid);
  }
}
