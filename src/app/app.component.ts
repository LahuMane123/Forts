import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public imagesUrl;
 
ngOnInit() {
    this.imagesUrl = [
    '/src/app/images/A.jpg',
    '/src/app/images/B.jpg',
    '/src/app/images/C.jpg',
    '/src/app/images/D.jpg',
    '/src/app/images/E.jpg',
    '/src/app/images/F.jpg',
    '/src/app/images/G.jpg',
    ];
}
}
