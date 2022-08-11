import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [ HeaderComponent, ArticleComponent ],
  imports: [
    CommonModule
  ],
  exports: [ HeaderComponent, ArticleComponent ]
})
export class CoreModule {

}
