import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseDTO } from './../../response.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoadorService } from 'src/app/shared/services/doador.service';
import { SweetAlert } from 'src/app/shared/sweet-alert';

@Component({
  selector: 'app-incluir-arquivo-json',
  templateUrl: './incluir-arquivo-json.component.html',
  styleUrls: ['./incluir-arquivo-json.component.css']
})
export class IncluirArquivoJsonComponent implements OnInit {

  public formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private doadorService: DoadorService,
    private router: Router
  ) { }

  fileToUpload: File = null;

  ngOnInit(): void {123
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  submit() {
    this.doadorService.insertFileJson(this.fileToUpload).subscribe((retorno: ResponseDTO) => {
      SweetAlert.exibirSucesso('Doador incluído com sucesso!')
      this.router.navigate(['/doador/listar'])
    })

  }

}
