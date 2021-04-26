import { ResponseDTO } from './../response.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoadorService } from 'src/app/shared/services/doador.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private doadorService: DoadorService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.configurarFormulario();
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      nome: [null, Validators.required],
      cpf: [null, Validators.required],
      rg: [null],
      data_nasc: [null, Validators.required],
      sexo: [null, Validators.required],
      mae: [null],
      pai: [null],
      email: [null],
      cep: [null],
      endereco: [null],
      numero: [null],
      bairro: [null],
      cidade: [null],
      estado: [null, Validators.required],
      telefone_fixo: [null],
      celular: [null],
      altura: [null, Validators.required],
      peso: [null, Validators.required],
      tipo_sanguineo: [null, Validators.required],
    })
  }


  public sexos: Array<String> = ["Masculino", "Feminino"];
  public tipoSanguineo: Array<String> = ["A+","A-","B+","B-","AB+", "AB-", "O+", "O-"];
  public estados: Array<any> = [
    {"nome": "Acre", "sigla": "AC"},
    {"nome": "Alagoas", "sigla": "AL"},
    {"nome": "Amapá", "sigla": "AP"},
    {"nome": "Amazonas", "sigla": "AM"},
    {"nome": "Bahia", "sigla": "BA"},
    {"nome": "Ceará", "sigla": "CE"},
    {"nome": "Distrito Federal", "sigla": "DF"},
    {"nome": "Espírito Santo", "sigla": "ES"},
    {"nome": "Goiás", "sigla": "GO"},
    {"nome": "Maranhão", "sigla": "MA"},
    {"nome": "Mato Grosso", "sigla": "MT"},
    {"nome": "Mato Grosso do Sul", "sigla": "MS"},
    {"nome": "Minas Gerais", "sigla": "MG"},
    {"nome": "Pará", "sigla": "PA"},
    {"nome": "Paraíba", "sigla": "PB"},
    {"nome": "Paraná", "sigla": "PR"},
    {"nome": "Pernambuco", "sigla": "PE"},
    {"nome": "Piauí", "sigla": "PI"},
    {"nome": "Rio de Janeiro", "sigla": "RJ"},
    {"nome": "Rio Grande do Norte", "sigla": "RN"},
    {"nome": "Rio Grande do Sul", "sigla": "RS"},
    {"nome": "Rondônia", "sigla": "RO"},
    {"nome": "Roraima", "sigla": "RR"},
    {"nome": "Santa Catarina", "sigla": "SC"},
    {"nome": "São Paulo", "sigla": "SP"},
    {"nome": "Sergipe", "sigla": "SE"},
    {"nome": "Tocantins", "sigla": "TO"}
  ];
  submit() {
    if (this.formulario.valid) {
      this.formulario.setValue
      this.doadorService.insertDonor(this.formulario.value).subscribe((retorno: ResponseDTO) => {
        SweetAlert.exibirSucesso('Doador incluído com sucesso!')
        this.router.navigate(['doador/listar']);
      })
    } else {
      SweetAlert.exibirErro('Formulário Inválido')
    }
  }

}
