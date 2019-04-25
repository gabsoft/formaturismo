import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
  styleUrls: ['./parques.component.scss']
})
export class ParquesComponent implements OnInit {
  parques: Array<Object> =[];
  logo: Array<Object> =[];
  promo: Array<Object> =[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getParques().subscribe(data => {
      for(let info in data) {
        if(data[info].slug != "promo-parques" && data[info].slug != "logo-parques" ) {
          this.parques.push(data[info])
        } else if(data[info].slug === "promo-parques"){
          this.promo.push(data[info])
        } else if(data[info].slug === "logo-parques"){
          this.logo.push(data[info])
        }
      }
      console.log(this.parques)
      console.log(this.logo)
      console.log(this.promo[0]["acf"])

    })

  }

  

}
