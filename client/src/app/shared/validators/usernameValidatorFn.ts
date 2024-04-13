import { ValidatorFn } from "@angular/forms";

export function usernameValidatorFn(): ValidatorFn {
    return (control) => {
        return (control.value == '' || /^(?=.*\d).{6,}$/.test(control.value)) ? null : { usernameError: true }
    }
}