
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Quote } from '../quote';
import { QuotesRepoService } from '../quotes-repo.service';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  id: number;
  quote: Quote;
  constructor(private activatedRout: ActivatedRoute, private quoteRepoService: QuotesRepoService) {
    this.activatedRout.params.subscribe((routeParams) => {
      this.id = +routeParams.id;
      this.quote = this.quoteRepoService.getQuoteById(this.id);
      console.log(this.id);
    })
  }

  ngOnInit(): void {
  }

}
