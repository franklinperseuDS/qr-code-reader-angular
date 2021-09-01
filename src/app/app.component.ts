import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  scanResult: any="";
  codigoItem: any="";
  quantidade: any="";
  unidadeMedida : any="";
  validade: any="";
  pedido: any="";
  tipo: any="";
  linha: any="";
  notaFiscal: any="";
  dataFabricacao : any="";
  estoque: any="";
  nEtiqueta: any="";
  showMyContainer: boolean = true;
  title = 'Qrcode Reader';


  onCodeResult(result: string )
    
    {
      this.scanResult = result;
      this.codigoItem = result.slice(1, 26);
      this.quantidade = parseInt(result.slice(26, 39));
      this.unidadeMedida = result.slice(39, 41);
      this.validade = result.slice(41, 49);
      this.pedido = result.slice(49, 57);
      this.tipo = result.slice(57, 59);
      this.linha = parseInt(result.slice(59, 65));
      this.notaFiscal = parseInt(result.slice(65, 78));
      this.dataFabricacao = result.slice(78, 86);
      this.estoque = parseInt(result.slice(86, 99));
      this.nEtiqueta = result.slice(99, result.length + 1);

     
        this.showMyContainer = !this.showMyContainer;
     
    }

    cleanCampos(){
      this.scanResult="";
      this.codigoItem="";
      this.quantidade="";
      this.unidadeMedida ="";
      this.validade="";
      this.pedido="";
      this.tipo="";
      this.linha="";
      this.notaFiscal="";
      this.dataFabricacao ="";
      this.estoque="";
      this.nEtiqueta="";
    }
    

}
