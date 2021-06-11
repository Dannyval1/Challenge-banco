import { Component, OnInit } from '@angular/core';
import { Cliente, Pedido } from '../interfaces/cliente.interface';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data_nit: Pedido = {
    nit: "800220154"
  };
  data_cliente: Cliente = {
    nit: '',
    nombre: '',
    capa: '',
    segmento: '',
    gerenteRelacion: ''
  };

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.obtenerCliente();
  }

  private obtenerCliente(){
    this.globalService.getClient(this.data_nit)
    .subscribe((respuesta:Cliente)=>{
      this.data_cliente = respuesta;
    });
  }
}
