import {NgModule} from'@angular/core'
import { CommonModule } from '@angular/common';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
@NgModule({
    imports: [
      CommonModule,
      MatTooltipModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSnackBarModule,
      MatCheckboxModule,
      MatTableModule
  
    
    ],
    exports: [
      MatTooltipModule,
      MatButtonModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSnackBarModule,
      MatCheckboxModule,
      MatTableModule
    ],
    declarations: []
  })
  export class MaterialModule { }