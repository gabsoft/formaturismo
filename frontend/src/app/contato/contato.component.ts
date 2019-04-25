import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  messageForm: FormGroup;
  logo: Object;
  submitted: boolean = false;
  success: boolean = false;
  estados: Object
  cidades: Object

  constructor(private data: DataService, private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      escola: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      telefone: ['', Validators.required],
      mensagem: ['', Validators.required],
    })
   }

  onSubmit() {
    this.submitted = true;

    if(this.messageForm.invalid) {
      return;
    }
    this.success = true
    this.messageForm.reset()
  }

  ngOnInit() {
    this.data.getContato().subscribe(data => {
      this.logo = data
    })
    this.data.getCities().subscribe(data => {
      this.cidades = data
    })
    this.data.getStates().subscribe(data => {
      this.estados = data
    })
  }

}
