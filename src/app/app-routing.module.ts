import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from './layout/full/full.component'

const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  {
    path: 'home',
    component: FullComponent,
    children: [

    ]
  },
  // {
  //   path: '',
  //   component: BlankComponent,
  //   children: [
  //     // { path: 'terms', component: TeamConditionComponent },
  //     // { path: 'privacy', component: PrivacyPolicyComponent },
  //     // { path: 'share/:name/:username', component: ShareComponent },
  //   ]

  // },
  { path: '***', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
