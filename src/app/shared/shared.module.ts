import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsService } from './services/locations.service';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCommonModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormComponent } from './components/form/form.component';
import { RouterModule } from '@angular/router';
import { InfoComponent } from './components/info/info.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { ModalComponent } from './components/form/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { FocusDirective } from './directives/focus.directive';
import { ImgOpacityDirective } from './directives/img-opacity.directive';

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent,
    NavComponent,
    FormComponent,
    InfoComponent,
    ModalComponent,
    CapitalizePipe,
    FocusDirective,
    ImgOpacityDirective,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatCommonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    RouterModule,
  ],
  providers: [LocationsService],
  exports: [NavComponent],
})
export class SharedModule {}
