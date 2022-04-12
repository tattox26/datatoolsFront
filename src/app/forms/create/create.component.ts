import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styles: [
  ]
})
export class CreateComponent implements OnInit {
  empresa: Empresa = {
    tipo_documento: '',
    numero_documento:'',
    nombre_completo:'',
    direccion:'',
    departamento:'',
    pais:'',
    telefono:''
  };

  constructor(
    private empresaService: EmpresaService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  saveBuy(): void {
    //this.empresa.valor = 1;
    const data = {
      nombre: this.empresa.tipo_documento,
      descripcion: this.empresa.numero_documento,
      cantidad: this.empresa.nombre_completo,
      valor: this.empresa.direccion,
      total: this.empresa.departamento,
      //user_id:this.id
    };

    this.empresaService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/EmpresaList']);
        },
        error => {
          console.log(error.message);
        });
  }

}

