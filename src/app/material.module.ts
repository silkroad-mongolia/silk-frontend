import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatStepperModule,
    MatToolbarModule,
    MatMenuModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatRadioModule
  } from '@angular/material';
  import {NgModule} from '@angular/core';

  @NgModule({
    exports: [
      MatButtonModule,
      MatCheckboxModule,
      MatInputModule,
      MatCardModule,
      MatToolbarModule,
      MatExpansionModule,
      MatProgressSpinnerModule,
      MatPaginatorModule,
      MatDialogModule,
      MatGridListModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatStepperModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatSelectModule,
      MatMenuModule,
      MatTabsModule,
      MatButtonToggleModule,
      MatTooltipModule,
      MatRadioModule
    ],
  })

  export class MaterialModule {}
