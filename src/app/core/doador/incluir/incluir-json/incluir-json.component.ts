import { Router } from '@angular/router';
import { ResponseDTO } from './../../response.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoadorService } from 'src/app/shared/services/doador.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'app-incluir-json',
  templateUrl: './incluir-json.component.html',
  styleUrls: ['./incluir-json.component.css']
})
export class IncluirJsonComponent implements OnInit {

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
      dadosJson: [null, Validators.required],
    })
  }

  submit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value.dadosJson)
      this.doadorService.insertJson(this.formulario.value.dadosJson).subscribe((retorno: ResponseDTO) => {
        SweetAlert.exibirSucesso('Doador incluído com sucesso!')

        this.router.navigate(['/doador/listar'])
      })
    } else {
      SweetAlert.exibirErro('Formulário Inválido')
    }
  }

}
