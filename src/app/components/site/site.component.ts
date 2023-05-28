import {Component, OnInit} from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {SelectionModel} from "@angular/cdk/collections";
// import {SiteModel} from "../../model/site.model";

export interface SiteModel {
  position: number;
  name : string;
  description : string
}
// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

const ELEMENT_DATA: SiteModel[] = [
  {position: 1, name: 'Hydrogen', description: 'H'},
  {position: 2, name: 'Helium',  description: 'He'},
  {position: 3, name: 'Lithium',  description: 'Li'},
  {position: 4, name: 'Beryllium',  description: 'Be'},

];
// const ELEMENT_DATA: SiteModel[] = [
//     {position: 1, name: 'West', description: 'West'},
//     {position: 2, name: 'Helium', description: 'West'},
//     {position: 3, name: 'Lithium', description: 'West'},
//     {position: 4, name: 'Beryllium', description: 'West'},
//   ];

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit{
  // displayedColumns: string[] = ['select', 'position', 'name', 'description'];
  displayedColumns: string[] = ['select', 'position', 'name', 'description'];

  dataSource = new MatTableDataSource<SiteModel>(ELEMENT_DATA);
  selection = new SelectionModel<SiteModel>(true, []);

  ngAfterViewInit() {
    // this.dataSource.data = this.service.getSite();
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SiteModel): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
constructor() {
}

ngOnInit() {
}
}
