    let length = prompt("Enter the desired length of your password (10-64 characters):");
    while (length < 10 || length > 64) {
        length = prompt("Invalid input. Enter the desired length of your password (10-64 characters):");
    }
    let lowercase = confirm("Include lowercase characters in your password?");
    let uppercase = confirm("Include uppercase characters in your password?");
    let numeric = confirm("Include numeric characters in your password?");
    let special = confirm("Include special characters in your password?");
    while (!lowercase && !uppercase && !numeric && !special) {
        alert("You must select at least one character type for your password.");
        lowercase = confirm("Include lowercase characters in your password?");
        uppercase = confirm("Include uppercase characters in your password?");
        numeric = confirm("Include numeric characters in your password?");
        special = confirm("Include special characters in your password?");
    }
    return {
        length: length,
        lowercase: lowercase,
        uppercase: uppercase,
        numeric: numeric,
        special: special
    };
}