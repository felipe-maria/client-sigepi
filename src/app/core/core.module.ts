import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [HeaderComponent, ArticleComponent],
    imports: [
        CommonModule, MatIconModule, MatToolbarModule
    ],
    exports: [HeaderComponent, ArticleComponent]
})
export class CoreModule {

}
