import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from "@angular/cdk/collections";
import {SiteModel} from "../../model/site.model";
import {SiteService} from "../../serices/site.service";
import {SiteSearch} from "../search/site-search-model";


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss'],
})
export class SiteComponent implements OnInit {
  displayedColumns: string[] = ['select', 'position', 'name', 'description'];

  dataSource = new MatTableDataSource<SiteModel>();
  selection = new SelectionModel<SiteModel>(true, []);

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

  searchModel: SiteSearch = {name: null, page: 1, pageSize: 5};

  constructor(private siteService: SiteService) {
    this.siteService.getSites(this.searchModel).subscribe(data => {
      this.dataSource.data = data.siteList;
    });
  }

  ngOnInit() {
  }
}
