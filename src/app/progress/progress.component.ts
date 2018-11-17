import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})

export class ProgressComponent implements OnInit {
	progress$: Object;

  	constructor(private data: DataService) { }

  	ngOnInit() {
  		this.data.getProgress().subscribe(
  			data => this.progress$ = data
  		);
  	}

}
