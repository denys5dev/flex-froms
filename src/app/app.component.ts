import { Component, ViewChild } from '@angular/core';
import { Service, Employee } from './my-service.service';
import { DxTreeListComponent } from 'devextreme-angular/ui/tree-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('tree') treeList: DxTreeListComponent;
  expanded = true;

  title = 'devex-request-forms';
  now = new Date();
  employees: Employee[] = [];
  simpleProducts: string[];

  constructor(service: Service) {
    this.simpleProducts = service.getSimpleProducts();
    this.employees = service.getEmployees();
  }


  toggleRow(key) {
    var keys = this.getNodeKeys(this.treeList.instance.getRootNode());
    this.treeList.instance.beginUpdate();
    keys.forEach((key) => {
      this.expanded ? this.treeList.instance.collapseRow(key) : this.treeList.instance.expandRow(key);
    });
    this.treeList.instance.endUpdate();
    this.expanded = !this.expanded;
  }

  getNodeKeys(node) {
    var keys = [];
    keys.push(node.key);
    node.children.forEach((item) => {
      keys = keys.concat(this.getNodeKeys(item));
    });
    return keys;
  }
}
