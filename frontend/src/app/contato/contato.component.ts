import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ContatoForm } from './contatoForm'
import { HttpClient } from '@angular/common/http';

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
  endpoint: string
  infoDeContato: ContatoForm
  http : HttpClient;

  constructor(private data: DataService, private formBuilder: FormBuilder, http : HttpClient) {
    this.http = http
    this.messageForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      email: ['', [Validators.required, Validators.email]],
      escola: ['', [Validators.required, Validators.pattern("[a-zA-Z][a-zA-Z ]+")]],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      telefone: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.minLength(8)]],
      mensagem: ['', [Validators.required, Validators.maxLength(200)]],
    })
   }

  onSubmit() {
    this.submitted = true;

    if(this.messageForm.invalid) {
      return;
    }
    this.success = true

    this.infoDeContato = new ContatoForm(this.messageForm.controls.nome.value, this.messageForm.controls.email.value, this.messageForm.controls.escola.value, this.messageForm.controls.estado.value
      , this.messageForm.controls.cidade.value, this.messageForm.controls.telefone.value, this.messageForm.controls.mensagem.value )
    this.endpoint = "http://localhost:8080/wordpress/wp-content/themes/formaturismo/sendEmail.php"
    let postVar = {
      email : this.messageForm.controls.email.value,
      name: this.messageForm.controls.nome.value,
      message: this.messageForm.controls.mensagem.value
    }
    this.http.post(this.endpoint, postVar)
      .subscribe(
        response => console.log(response),
        response => console.log(response)
      )

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
