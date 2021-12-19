import { Component, OnInit, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
// import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import Chart from 'chart.js';

// import { catchError, map } from 'rxjs/operators';

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2
} from "../../variables/charts";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public datasets: any;
    public data: any;
    public salesChart: any;
    public clicked: boolean = true;
    public clicked1: boolean = false;

    public calendarType: String = "timelog";

    constructor() {

    }

    ngOnInit() {
        //

        //
        this.datasets = [
            [5, 20, 10, 30, 15, 40, 20, 100, 60],
            [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ];
        this.data = this.datasets[0];


        var chartOrders = document.getElementById('chart-orders');

        parseOptions(Chart, chartOptions());


        new Chart(chartOrders, {
            type: 'bar',
            options: chartExample2.options,
            data: chartExample2.data
        });

        var chartSales = document.getElementById('chart-sales');

        this.salesChart = new Chart(chartSales, {
            type: 'line',
            options: chartExample1.options,
            data: chartExample1.data
        });
    }

    public updateOptions() {
        this.salesChart.data.datasets[0].data = this.data;
        this.salesChart.update();
    }
}
