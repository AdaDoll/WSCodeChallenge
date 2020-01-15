import { Component, OnInit, Input} from '@angular/core';
import { Group, Image } from '../store.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  public images: Image[];
  @Input() public group: Group;

  constructor() {
  }
  ngOnInit() {
    this.images = this.group.images; 
  }

}
