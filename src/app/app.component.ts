import { Component } from '@angular/core';
import { Service } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devex-request-forms';
  now = new Date();
  simpleProducts: string[];
  constructor(service: Service) {
    this.simpleProducts = service.getSimpleProducts();
  }
}
