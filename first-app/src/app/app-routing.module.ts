import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from './foo/foo.component';
import { AsyncGuard } from './async.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'foo',
  },
  {
    path: 'foo',
    component: FooComponent,
    canActivate: [AsyncGuard],
  },
  {
    path: 'bar',
    component: BarComponent,
    canActivate: [AsyncGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/first-app' }],
})
export class AppRoutingModule {}
