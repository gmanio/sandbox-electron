import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
// import { PageNotFoundComponent } from './components/error/page-not-found.component';

export const RootRouterModule = RouterModule.forRoot(
  [
    { path: '', component: AppComponent},
    // { path: '**', component: PageNotFoundComponent }
  ],

  /**
   *  Some browsers does not support HTML5 pushstate.
   */
  {
    useHash: true
  }
);

