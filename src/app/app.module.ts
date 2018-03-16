import { ColorService } from './services/color.service';
import { EventComponent } from './shared/event/event.component';
import { GroupsService } from './services/groups.service';
import { CalendarService } from './services/calendar.service';
import { WeeklyDayComponent } from './weekly/weekly-calendar/weekly-day/weekly-day.component';
import { WeeklyCalendarComponent } from './weekly/weekly-calendar/weekly-calendar.component';
import { PageCopyComponent } from './shared/page-copy/page-copy.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { environment } from '../environments/environment';
import { UIService } from './shared/ui.service';
import { WeeklyComponent } from './weekly/weekly.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RetreatsComponent } from './retreats/retreats.component';
import { GroupsComponent } from './groups/groups.component';
import { ResourcesComponent } from './resources/resources.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { WeeklyService } from './services/weekly.service';
import { ResourcesService } from './services/resources.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    WeeklyComponent,
    CalendarComponent,
    RetreatsComponent,
    GroupsComponent,
    ResourcesComponent,
    PageTitleComponent,
    PageCopyComponent,
    WeeklyCalendarComponent,
    WeeklyDayComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [
    UIService,
    WeeklyService,
    CalendarService,
    GroupsService,
    ResourcesService,
    ColorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
