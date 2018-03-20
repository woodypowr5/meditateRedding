import { ByMonthPipe } from './pipes/byMonth.filter';
import { RetreatService } from './retreats/retreat.service';
import { ColorService } from './services/color.service';
import { EventComponent } from './shared/event/event.component';
import { GroupsService } from './services/groups.service';
import { WeeklyDayComponent } from './weekly/weekly-calendar/weekly-day/weekly-day.component';
import { WeeklyCalendarComponent } from './weekly/weekly-calendar/weekly-calendar.component';
import { PageCopyComponent } from './shared/page-copy/page-copy.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ContactComponent } from './contact/contact.component';
import { RetreatsComponent } from './retreats/retreats.component';
import { GroupsComponent } from './groups/groups.component';
import { ResourcesComponent } from './resources/resources.component';
import { PageTitleComponent } from './shared/page-title/page-title.component';
import { WeeklyService } from './services/weekly.service';
import { ResourcesService } from './services/resources.service';
import { GroupComponent } from './groups/group/group.component';
import { RetreatComponent } from './retreats/retreat/retreat.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactFormComponent } from './contact/contact-form/contact-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    SidenavListComponent,
    WeeklyComponent,
    ContactComponent,
    RetreatsComponent,
    GroupsComponent,
    ResourcesComponent,
    PageTitleComponent,
    PageCopyComponent,
    WeeklyCalendarComponent,
    WeeklyDayComponent,
    EventComponent,
    GroupComponent,
    RetreatComponent,
    ByMonthPipe,
    FooterComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [
    UIService,
    WeeklyService,
    GroupsService,
    ResourcesService,
    ColorService,
    RetreatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
