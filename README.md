# QrCode -reader

Esse projeto foi gerado pelo [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

projeto anteriormente tinha sido construido em html, javascript e usando o instascan para leitura de qr-code
e foi convertido para angular usando o @zxing/ngx-scanner para a leitura de camera
além disso utilizei o angular/pwa para transforma-lo 
consumi esse app através do heroku .
alguns passos que podem ser seguidos
ng new myapp
yes
css
acessa a pasta projeto
ng add @angular/pwa
verificar se dentro do app.module.js 
tem o ServiceWorkerModule
para rodar o projeto
$ ng build 
pode tentar rodar com o seguinte comando:
$ npx serve
ou então com
$ cd dist/projeto
e usando o http-serve comando 
$ npm i -g http-server   (para importar)
$ http-server  (para rodar o servidor)
por padrão o acesso é no : localhost:8080
link de ajuda : (https://medium.com/ngconf/angular-pwa-install-and-configure-858dd8e9fb07)
configure angular app to deploy properly o n
(https://www.javaguides.net/2020/11/how-to-deploy-angular-application-to-heroku.html)
(https://www.youtube.com/watch?v=HWBSSC7Vbg0)