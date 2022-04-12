import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})

export class ListComponent implements OnInit {
  purchases?: Empresa[];
  currentEmpresa?: Empresa;
  currentIndex = -1;
  constructor(
    private empresaService: EmpresaService
    ) { }

  ngOnInit(): void {
    this.LoadItem();
  }

  LoadItem(): void {
    this.empresaService.read()
      .subscribe(
        data => {
          this.purchases = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.LoadItem();
    this.currentEmpresa = undefined;
    this.currentIndex = -1;
  }

  setActiveBuy(empresa: Empresa, index: number): void {
    this.currentEmpresa = empresa;
    this.currentIndex = index;
  }

  deleteItem(id: number): void {
    this.empresaService.delete(id)
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }


}
