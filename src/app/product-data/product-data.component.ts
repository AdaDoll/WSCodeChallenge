import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { StoreService, Store, Image, Group } from '../store.service';


@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html',
  styleUrls: ['./product-data.component.css']
})
export class ProductDataComponent implements OnInit {
  title: string;
  store: Store;
  groups: Group[];
  currentGroup: Group;
  public isProductDetailVisible: boolean;
  constructor(private storeService: StoreService) {
    this.isProductDetailVisible = false;
  }
  closeDetailsPage(event) {
    if (event.srcElement.className === 'details-page') {
      this.isProductDetailVisible = false;
    }
  }
  
  onClick(group: Group) {
    this.isProductDetailVisible = true;
    this.currentGroup = group;
    console.log('clicked! event = ', group);
  }

  ngOnInit() {
    this.storeService.getStoreData()
    .then(store => {
      this.store = store;
      this.title = store.name;
      this.parseGroupData(store.groups);
      this.groups = store.groups;
    });
  }
  private parseGroupData(groups: Group[]) {
    return groups.forEach(group => {
      group.name = group.name.replace(/&amp;/gi, '&');
    });
  }
}
