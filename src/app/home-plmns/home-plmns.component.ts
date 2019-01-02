import { HomePlmnService, HomePlmn } from './../shared/home-plmn.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';


@Component({
  selector: 'app-home-plmns',
  templateUrl: './home-plmns.component.html',
  styleUrls: ['./home-plmns.component.css']
})
export class HomePlmnsComponent implements OnInit {
  homePlmnList: HomePlmn[];
  public dataSource = new MatTableDataSource<HomePlmn>();
  public displayedColumns = ['plmnCode', 'plmnDescription', 'utcOffset', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private service: HomePlmnService) { }

  ngOnInit() {
    this.refreshHomePlmns();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  refreshHomePlmns() {
    this.service.getAll().subscribe(
      data => {
        console.log(data[0]);
        this.homePlmnList = data;
        this.dataSource.data = data;
      }
    );
  }
}
