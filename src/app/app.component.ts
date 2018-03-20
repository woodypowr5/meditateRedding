
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public currentRoute;
  constructor(private router: Router, private meta: Meta) {
    this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentRoute = event.url;
        }
    });
    this.meta.addTag({ name: 'description', content: 'MeditateRedding.com serves to centralize and consolidate as much information as possible related to meditation practice in the Shasta County area of Northern California. We would like for Shasta County residents or passers-through to be able to find local meditation gatherings, seek out nearby retreats and connect with other like-minded individuals.' });
    this.meta.addTag({ name: 'author', content: 'Chris Woodward' });
    this.meta.addTag({ name: 'keywords', content: 'Meditate Redding California Ca Buddhism Shasta Northern Spiritual Meditation Buddhism' });
  }

  ngOnInit() {}

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
