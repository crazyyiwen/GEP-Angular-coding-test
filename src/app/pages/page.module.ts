import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { 
        MatTableModule,
        MatPaginatorModule,
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTabsModule 
        } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { DisplayPageComponent } from './display-page.component';
import { CustomersPageComponent } from './customers-page/customers-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { DialogPopupComponent } from './dilog-popup.component';

const routes: Routes = [
    {path: '', component: DisplayPageComponent},
    {path: 'customers', component: CustomersPageComponent},
    {path: 'orders', component: OrdersPageComponent}
]
@NgModule({
    declarations: [DisplayPageComponent, CustomersPageComponent, OrdersPageComponent, DialogPopupComponent],
    imports: [
        MatTableModule,
        MatPaginatorModule,
        HttpClientModule,
        MatIconModule,
        MatDialogModule,
        MatMenuModule,
        MatFormFieldModule,
        MatTabsModule,
        FormsModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        MatTableModule,
        MatPaginatorModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        MatFormFieldModule,
        MatTabsModule,
        FormsModule,
        HttpClientModule,
        RouterModule,
    ],
    providers: [],
    entryComponents: [DialogPopupComponent]
})

export class DisplayModule{

}