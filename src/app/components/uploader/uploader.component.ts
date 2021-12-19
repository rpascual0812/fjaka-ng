import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

import { GlobalService } from '../../services/global.service';

const URL = 'http://localhost:3000/file/upload';

@Component({
    selector: 'app-uploader',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

    public uploader:FileUploader = new FileUploader({url: URL});

    constructor(
        private globalService: GlobalService
    ) { }

    ngOnInit(): void {
    }

    upload(event: any) {
        console.log(1, event);
    }

}
