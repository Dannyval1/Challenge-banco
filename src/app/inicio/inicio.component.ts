import { Component, OnInit } from '@angular/core';
import { Cliente, Pedido } from '../interfaces/cliente.interface';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  data_nit: Pedido = {
    nit: "800220154"
  };
  data_cliente: Cliente ={
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
      console.log(this.data_cliente);
    });
  }
}
