import {Component, inject} from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import {JsonPipe} from '@angular/common';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-new-modal',
  imports: [
    JsonPipe,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './new-modal.component.html',
  styleUrl: './new-modal.component.css'
})
export class NewModalComponent {
 dialogRef = inject(MatDialogRef);
 data = inject(DIALOG_DATA)


  closeModal(): void {
   this.dialogRef.close({name: 'vita', age: 15});
  }
}
