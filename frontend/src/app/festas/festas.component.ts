import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-festas',
  templateUrl: './festas.component.html',
  styleUrls: ['./festas.component.scss']
})
export class FestasComponent implements OnInit {

  logo: Array<Object> =[];
  festas: Array<Object> =[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getFestas().subscribe(data => {
      for(let info in data) {
        if(data[info].slug === "logo-festas"){
          this.logo.push(data[info])
        } else {
          this.festas.push(data[info])
        }
      }
    })
  }

}
