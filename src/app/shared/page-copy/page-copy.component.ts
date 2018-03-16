import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-copy',
  templateUrl: './page-copy.component.html',
  styleUrls: ['./page-copy.component.css']
})
export class PageCopyComponent implements OnInit {
  @Input() text;
  constructor() { }

  ngOnInit() {
  }

}
