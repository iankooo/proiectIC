import {Component, Input, OnInit} from '@angular/core';
import {FoodUnit} from '../main-functionality/shared/foodUnit.model';

@Component({
  selector: 'app-detail-section',
  templateUrl: './detail-section.component.html',
  styleUrls: ['./detail-section.component.css']
})
export class DetailSectionComponent implements OnInit {
  @Input() foodUnit: FoodUnit;
  constructor() { }

  ngOnInit(): void {
  }

}
