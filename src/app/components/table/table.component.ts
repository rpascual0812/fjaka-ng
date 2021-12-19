import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input() params: any = null;
    @Input() beforeItemDisplay: Function;
    @Input() onClicked: Function;
    @Output() change = new EventEmitter();

    pagination: any = {};
    tableSizes = [10, 20, 30, 40, 50, 100, 300, 500, 1000];

    constructor() { }

    ngOnInit(): void {
        setTimeout(() => {
            this.pagination = {
                page: 1,
                count: this.params.pagination.count,
                tableSize: 10
            }

            this.params.data.forEach(data => {
                this.beforeItemDisplay(data);
            });
        }, 500);

    }

    onTableDataChange(event:any){
        this.pagination.page = event;
        this.change.emit(this.pagination);
    }

    onTableSizeChange(event:any): void {
        this.pagination.tableSize = event.target.value;
        this.pagination.page = 1;
        this.change.emit(this.pagination);
    }

    callback(data:any, element:any) {
        this.onClicked(data, element);
        // console.log('clicked', data, element);
    }

}
