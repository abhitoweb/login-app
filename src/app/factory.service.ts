import { Injectable } from '@angular/core';

@Injectable()
export class FactoryService {
  products = [
      { id: 1,name: 'Book',rate: 100,quality:5},
      { id: 2,name: 'Pen',rate: 250,quality:5},
      { id: 3,name: 'Scissor',rate: 10,quality:5}
    ];
  constructor() { }
  deleteProductFromId(id){
    let i:number=0;
    for(i=0;i<this.products.length;i++){
      if(this.products[i].id==id){
        this.products.splice(i,1);
        break;
      }
    }
    return;
  }
}
