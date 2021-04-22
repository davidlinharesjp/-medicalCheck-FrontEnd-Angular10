import { ResponseDTO } from './../response.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoadorService } from 'src/app/shared/services/doador.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  public responseDTO: ResponseDTO;
  
  constructor(
    private doadorService: DoadorService,
    private router: Router
  ) { }
  public show  = false;
  public show1 = false;
  public show2 = false;
  public show3 = false;
  public show4 = false;


  ngOnInit(): void {
    this.doadorService.getDonor().subscribe((resposta: ResponseDTO) => {
      this.responseDTO = resposta;
    })
  }

}
