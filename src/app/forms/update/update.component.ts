import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/empresa.model';
import { EmpresaService } from 'src/app/services/empresa.service';
import { ActivatedRoute ,Router } from '@angular/router';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styles: [
  ]
})
export class UpdateComponent implements OnInit {
  empresa: Empresa = {
    tipo_documento: '',
    numero_documento:'',
    nombre_completo:'',
    direccion:'',
    departamento:'',
    pais:'',
    telefono:'',
  };
  user_id = 0;
  constructor(
    private empresaService: EmpresaService,
    private route : ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    //this.getUpdate(this.route.snapshot.params.id);
  }
  /* Se realiza el update y se envia en un array los valors */
  updateBuy(): void {
    const data = {
      nombre: this.empresa.tipo_documento,
      descripcion: this.empresa.numero_documento,
      cantidad: this.empresa.nombre_completo,
      valor: this.empresa.direccion,
      total: this.empresa.departamento,
     // user_id:this.user_id
    };
    /* Se envia el id que va por url
    this.empresaService.update(this.route.snapshot.params.id,data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/List']);
        },
        error => {
          console.log(error.message);
        });*/
  }

  /* Se envia por el metodo get el id para traer la info */
  getUpdate(id: number): void {
    this.empresaService.get(id)
      .subscribe(
        data => {
          console.log(data);
          //this.user_id = data.user.id;
          this.empresa = data;
        },
        error => {
          console.log(error);
        });
  }


}

