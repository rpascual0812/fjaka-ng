import { Component, OnInit } from '@angular/core';

import { JobTitlesService } from '../../../services/job-titles.service';

import * as _ from '../../../utilities/globals';

@Component({
    selector: 'app-job-titles',
    templateUrl: './job-titles.component.html',
    styleUrls: ['./job-titles.component.css']
})
export class JobTitlesComponent implements OnInit {
    filters = {
        search: null
    };
    job_titles: any = [];
    pagination: any = {};

    constructor(
        private jobTitlesService: JobTitlesService
    ) { }

    ngOnInit(): void {
        this.fetch();
    }

    fetch() {
        let data = {
            pagination: _.stringify(this.pagination),
            filters: _.stringify(this.filters)
        }

        this.jobTitlesService.fetch(data)
        .then((data:any) => {
            this.job_titles = data;
        });
    }

    search() {
        this.fetch();
    }

}
