import { Component, Input, OnInit } from '@angular/core';
import { ItemsWithIcons } from 'src/app/shared/components/UI/item-list/models/items-icons.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
  @Input() data: ItemsWithIcons[];
  @Input() type: string;
  constructor() { }

  ngOnInit() {}

}
