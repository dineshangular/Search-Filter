import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {

  users:any[] = [ {name:"Dinesh"}, {name:"Mukesh"}, {name:"Nandhini"}, {name:"Devi"}, {name:"Elango"} ];
  userFilter:any = { name: '' };

  constructor() { }

  ngOnInit() {
  }

}
