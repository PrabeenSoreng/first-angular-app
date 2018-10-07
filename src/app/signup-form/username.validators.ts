import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
            return {cannotContainSpaces: true};
        return null;
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            // Simulating request to the server
            setTimeout(() => {
                if(control.value === "John")
                    resolve({shouldBeUnique: true});
                else
                    resolve(null);
            }, 1000);
        });
    }
}