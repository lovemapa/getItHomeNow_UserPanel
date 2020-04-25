import { MatSnackBar } from '@angular/material/snack-bar';

export class CommonMethods {



    public static showconsole(tag: string, message: string) {
        // console.log(tag, message);
    }


   /*
    *Show Error Dialog Message Common Method
    */

   static showErrorDialog(snackBar: MatSnackBar, message: string) {
    snackBar.open(message, "", {
        duration: 3000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: ['blue-snackbar']
    });
}

/*
      Show Success Dialog Message Common Method
*/

static showSuccessDialog(snackBar: MatSnackBar, message: string) {
    snackBar.open(message, "", {
        duration: 3000,
        panelClass: ['sucess-snackbar'],
        verticalPosition: 'bottom',
        horizontalPosition: 'right',
    });
}


}