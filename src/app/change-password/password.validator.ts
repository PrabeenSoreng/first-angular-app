import { AbstractControl, ValidationErrors } from "@angular/forms";

export class PasswordValidator{
    static isOldPassword(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if(control.value !== "qwerty")
                    resolve({shouldMatch: true});
                else
                    resolve(null);
            }, 1000);
        });
    }
    static passwordsShouldMatch(control: AbstractControl): ValidationErrors | null {
        let newPassword = control.get('newpassword');
        let confirmPassword = control.get('confirmpassword');
        if(newPassword.value !== confirmPassword.value)
            return {passwordsShouldMatch: true};
        
        return null;
    }
}