import { Injectable } from '@angular/core';
import { Quote } from './quote';
import { QuotesService } from './quotes.service';

@Injectable({
  providedIn: 'root'
})
export class QuotesRepoService {
  quotes: Quote [] = [];
  constructor(private quotesService: QuotesService) {
    this.quotesService.getQuotes().subscribe(
      (response) => {
        this.quotes = response,
        console.log(this.quotes);
      }
    );
  }
  getQuotes(){
    return this.quotes;
  }

  getQuoteById(id: number){
    return this.quotes.find( elemento => id === elemento.id);
  }
}
