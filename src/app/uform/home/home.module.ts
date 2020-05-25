import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import { homeRoutes } from './home.routes';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(homeRoutes),
  ],
  declarations: [
    HomeComponent,
  ],
  providers: [],
})
export class HomeModule {
}
