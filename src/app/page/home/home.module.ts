import { NgModule } from '@angular/core';
import { CardModule } from './card-list/card/card.module';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
      CardModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {

}
