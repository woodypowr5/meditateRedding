import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
