import { Component, OnInit } from '@angular/core';
import { QuotesRepoService } from '../quotes-repo.service';

@Component({
  selector: 'app-get-service',
  templateUrl: './get-service.component.html',
  styleUrls: ['./get-service.component.css']
})
export class GetServiceComponent implements OnInit {
  
  constructor(private quotesRepo: QuotesRepoService) {
  }

  ngOnInit(): void {
   
      
  }

  get quotes(){
    return this.quotesRepo.getQuotes();
  }

}
