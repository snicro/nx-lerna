import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'flair-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: 'primary' | 'secondary';
  @Input() class: string;
  @Input() text: string | undefined;
  @Input() icon: string | undefined;
  @Input() disabled: boolean;
  @Input() loading: boolean;
  @Input() autoFocus: boolean;

  constructor() { }

  ngOnInit() {
  }

}
