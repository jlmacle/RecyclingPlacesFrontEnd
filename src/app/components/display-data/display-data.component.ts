import { Component, OnInit } from '@angular/core';
import {EntryService} from '../../services/entry.service';
import {Entry} from '../../models/entry';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.css']
})
export class DisplayDataComponent implements OnInit {

  constructor(private entryService:EntryService) { }
 //constructor(){}
  entriesList:any;

  ngOnInit(): void {
    console.log("Entering ngOnInit.");
    
    this.entryService.getEntries().then(
      data => {this.entriesList=data;console.log("Entry data received.");}, 
      error => {console.log("Error during entry data retrieving: ",error);}
      );
    
  }

}
