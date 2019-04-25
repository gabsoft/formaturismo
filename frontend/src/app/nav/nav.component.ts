import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  logo: Object

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getNav().subscribe(data => {
      this.logo = data;
    })
  }

}
