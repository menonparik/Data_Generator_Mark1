import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DataService } from '../data.service';

import * as XLSX from "xlsx";
import { saveAs } from 'file-saver';

import { HttpClient } from '@angular/common/http';

interface MyObject {

    
  [key: string]: any;

}

@Component({

  selector: 'app-result',

  templateUrl: './result.component.html',

  styleUrls: ['./result.component.css']

})




export class ResultComponent implements OnInit {

  @ViewChild('excel-table')

  myDiv!: ElementRef;

sample:any[][]=[];

heading: any[]=[];

  constructor(private dataService: DataService,private http: HttpClient) { }




  ngOnInit(): void {

  this.sample =this.dataService.getData();

this.heading = this.dataService.getData1();

console.log(this.sample);




  }

 

  download(){  

    const table = document.getElementById('excel-table');

    const worksheet = XLSX.utils.table_to_sheet(table);

    const workbook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workbook,worksheet,"Sheet1");

    const filename="testData.xlsx";

    XLSX.writeFile(workbook, filename);

  }

   exportToJson() {




 const arr = this.sample;

 const myJson = JSON.stringify(arr);

const json = myJson.replace(/\t/g, '')

  console.log(json)

    const blob = new Blob([json], { type: 'application/json' });
    saveAs(blob, 'table-data.json');


}


}