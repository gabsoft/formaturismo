import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  constructor(private data: DataService) { }

  logo: Object;

  ngOnInit() {
    this.data.getContato().subscribe(data => {
      this.logo = data
    })
  }

}
