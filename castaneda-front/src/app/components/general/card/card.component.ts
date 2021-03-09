import {Component, Input, OnChanges} from '@angular/core';
import {Book} from '@app/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnChanges{
  @Input() card: Book;
  number = null;
  due_back: string;

  ngOnChanges() {
    if(this.card) {
      this.number = this.card.number;
      this.due_back = new Date(this.card.due_back).toLocaleDateString()
    }
  }
}
