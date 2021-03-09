import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralModule } from '@app/components/general/general.module';

import { BookService } from '@rest/book/book.service';

import { CatalogComponent } from './catalog.component';
import { CatalogRouting } from './catalog-routing';

@NgModule({
  declarations: [ CatalogComponent ],
  imports: [
    CommonModule,
    CatalogRouting,
    GeneralModule
  ],
  providers: [ BookService ],
  exports: [ CatalogComponent ]
})
export class CatalogModule {}
