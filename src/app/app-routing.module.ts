
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { ContactComponent } from './contact/contact.component';
import { RetreatsComponent } from './retreats/retreats.component';
import { ResourcesComponent } from './resources/resources.component';
import { GroupsComponent } from './groups/groups.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'weekly', component: WeeklyComponent},
  { path: 'retreats', component: RetreatsComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'groups', component: GroupsComponent},
  { path: 'resources', component:  ResourcesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
