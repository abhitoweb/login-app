import { Component, OnInit } from '@angular/core';
import{ Input } from '@angular/core';
import {FactoryService} from '../factory.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: {id: number,name: string, rate: number,quality:number};
  constructor( private factoryService:FactoryService) { }

  ngOnInit() {
  }
  onProductDelete(){
    this.factoryService.deleteProductFromId(this.product.id);
  }
}
