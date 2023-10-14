import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  coverPhoto: string = '';
  @Input()
  cardTitle: string = '';
  @Input()
  cardDesc: string = '';
  @Input()
  publicationDate: string = '';
  @Input()
  id: string = '0';

  constructor() { }

  ngOnInit(): void {
  }

}
