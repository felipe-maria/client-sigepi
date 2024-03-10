import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import {SharedModule} from "../shared/shared.module";

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MatIconModule,
        RouterModule,
        SharedModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {

}
