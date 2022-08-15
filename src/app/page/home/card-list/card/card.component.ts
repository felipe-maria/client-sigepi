import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'sigepi-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() title = '';
  @Input() text = '';
  @Input() buttonText = '';

}
