import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-steps-progress',
  templateUrl: './steps-progress.component.html',
  styleUrls: ['./steps-progress.component.scss']
})
export class StepsProgressComponent implements OnInit {
  states = [{
    name: '1',
    isCurrent: true,
    href: 'sdf'
  }, {
    name: '2',
    isCurrent: false,
    href: 'sdf'
  }, {
    name: '3',
    isCurrent: false,
    href: 'sdf'
  }, {
    name: '4',
    isCurrent: false,
    href: 'sdf'
  }]
  constructor() { }

  ngOnInit() {
  }

}
