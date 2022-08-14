import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        HeaderComponent
    ],
    imports: [
        MatIconModule
    ],
    exports: [
        HeaderComponent
    ]
})
export class CoreModule {

}
