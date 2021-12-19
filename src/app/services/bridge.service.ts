import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BridgeService {
    camera_start: BehaviorSubject<String> = new BehaviorSubject(null); // null so during first run, camera won't be started
    camera_start$ = this.camera_start.asObservable();

    calendar_events: BehaviorSubject<String> = new BehaviorSubject(null); // null so during first run, camera won't be started
    calendar_events$ = this.calendar_events.asObservable();
}
