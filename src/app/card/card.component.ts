import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sigepi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  title: string = 'Title test coming from Card Component UHUL!!!!!!';
  text: string = 'Card text description coming from Card Component UHUL!!!!!!';
  buttonText: string = 'Button text';

  constructor() { }

  ngOnInit(): void {
  }

}
