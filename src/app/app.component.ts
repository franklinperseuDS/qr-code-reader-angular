import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  scanResult: any="";
  title = 'qr-code';

  onCodeResult(result: string)
    {
      this.scanResult = result.slice(1,32);
    }

}
