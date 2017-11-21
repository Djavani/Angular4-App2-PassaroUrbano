import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: string = ''
  public complemento: string = ''
  public formaPagamento: string = ''
  
  // controle de validação dos campos
  public enderecoValido: boolean;
  public numeroValido: boolean;
  public complementoValido: boolean;
  public formaPagamentoValido: boolean;

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
   
    // se a string for maior que 3
    this.enderecoValido = false;
    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    }
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    //logica de validacao do numero
    this.numeroValido = false;
    if (this.numero.length > 0) {
      this.numeroValido = true;
    }

  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementoValido = false;
    if (this.complemento.length > 0 ) {
      this.complementoValido = true;
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoValido = false;
    if (this.formaPagamento.length > 0 ) {
      this.formaPagamentoValido = true;
    }
  }

}
