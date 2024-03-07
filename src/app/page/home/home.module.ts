import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { CardComponent } from './card-list/card/card.component';
import { CardsComponent } from './card-list/cards/cards.component';
import { HomeComponent } from './home.component';

@NgModule({
    declarations: [
        HomeComponent,
        CardsComponent,
        CardComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        HomeComponent
    ]
})
export class HomeModule {

}
