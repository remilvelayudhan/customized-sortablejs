import { Component, OnInit } from '@angular/core';

import { AbstractArrangeDirective } from './abstract-arrange.directive';

@Component({
  selector: 'app-arrange',
  templateUrl: './arrange.component.html',
  styleUrls: ['./arrange.component.scss'],
  imports: [],
  standalone: true,
})
export class ArrangeComponent
  extends AbstractArrangeDirective
  implements OnInit
{
  ngOnInit() {}
}
