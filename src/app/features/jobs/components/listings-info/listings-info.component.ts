import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-listings-info',
  templateUrl: './listings-info.component.html',
  styleUrls: ['./listings-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListingsInfoComponent implements OnInit {
  @Input() company: string;
  @Input() position: string;
  @Input() postedAt: string;
  @Input() contract: string;
  @Input() location: string;
  @Input() newJob: boolean;
  @Input() featured: boolean;

  constructor() {}

  ngOnInit(): void {}
}
