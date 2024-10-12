function generateTop40EmailFormats({
    firstName,
    middleName = '',
    lastName,
    domain,
    department = '',
    role = '',
    year = '',
    number = ''
}) {
    const f = firstName.toLowerCase();
    const m = middleName.toLowerCase();
    const l = lastName.toLowerCase();
    const emailDomain = `@${domain.toLowerCase()}`;
    const dept = department ? `.${department.toLowerCase()}` : '';
    const rol = role ? `.${role.toLowerCase()}` : '';
    const yr = year ? `.${year}` : '';
    const num = number ? `.${number}` : '';

    const fi = f.charAt(0);
    const mi = m.charAt(0);
    const li = l.charAt(0);

    // List of the first 40 formats
    const emailFormats = [
        // Most used formats
        `${f}.${l}${emailDomain}`,                      // FirstName.LastName
        `${fi}.${l}${emailDomain}`,                     // FirstInitial.LastName
        `${f}${emailDomain}`,                           // FirstName
        `${f}${l}${emailDomain}`,                       // FirstNameLastName
        `${l}${emailDomain}`,                           // LastName
        `${l}.${fi}${emailDomain}`,                     // LastName.FirstInitial
        `${fi}${l}${emailDomain}`,                      // FirstInitialLastName
        `${fi}.${li}${emailDomain}`,                    // FirstInitial.LastInitial
        `${f}.${li}${emailDomain}`,                     // FirstName.LastInitial
        `${fi}${mi}${l}${emailDomain}`,                 // FirstInitialMiddleInitialLastName

        // Moderately used formats
        `${f}.${l}${dept}${emailDomain}`,               // FirstName.LastName.Department
        `${f}.${mi}.${l}${emailDomain}`,                // FirstName.MiddleInitial.LastName
        `${f}_${l}${emailDomain}`,                      // FirstName_LastName
        `${f}.${m}.${l}${emailDomain}`,                 // FirstName.MiddleName.LastName
        `${f}-${l}${emailDomain}`,                      // FirstName-LastName
        `${fi}.${mi}.${l}${emailDomain}`,               // FirstInitial.MiddleInitial.LastName
        `${f}${li}${emailDomain}`,                      // FirstNameLastNameInitial
        `${fi}.${mi}.${li}${emailDomain}`,              // FirstInitial.MiddleInitial.LastInitial
        `${f}.${mi}.${li}${emailDomain}`,               // FirstName.MiddleInitial.LastInitial
        `${f}_${li}${emailDomain}`,                     // FirstName_LastInitial
        `${fi}-${l}${emailDomain}`,                     // FirstInitial-LastName

        // Less used formats
        `${fi}.${mi}.${li}${emailDomain}`,              // FirstInitial.MiddleInitial.LastInitial
        `${fi}${mi}${emailDomain}`,                     // FirstInitialMiddleInitial
        `${fi}.${mi}${emailDomain}`,                    // FirstInitial.MiddleInitial
        `${f}.${mi}${emailDomain}`,                     // FirstName.MiddleInitial
        `${f}.${num}${emailDomain}`,                    // FirstName.Number
        `${l}.${mi}.${fi}${emailDomain}`,               // LastName.MiddleInitial.FirstInitial
        `${f}.${li}${num}${emailDomain}`,               // FirstName.LastInitial.Number
        `${f}${li}.${num}${emailDomain}`,               // FirstNameLastInitial.Number
        `${f}.${l}.${yr}${emailDomain}`,                // FirstName.LastName.Year
        `${f}.${l}${num}${emailDomain}`,                // FirstName.LastName.Number

        // Specialized formats
        `${f}.${l}${rol}${emailDomain}`,                // FirstName.LastName.Role
        `${fi}${l}${num}${emailDomain}`,                // FirstInitialLastName.Number
        `${fi}.${li}${num}${emailDomain}`,              // FirstInitial.LastInitial.Number
        `${f}.${mi}.${li}${rol}${emailDomain}`,         // FirstName.MiddleInitial.LastInitial.Role
        `${l}.${mi}.${fi}${rol}${emailDomain}`,         // LastName.MiddleInitial.FirstInitial.Role
        `${fi}.${m}.${l}${emailDomain}`,                // FirstInitial.MiddleName.LastName
        `${f}.${m}.${l}.${num}${emailDomain}`,          // FirstName.MiddleName.LastName.Number
        `${f}-${m}-${l}${emailDomain}`,                 // FirstName-MiddleName-LastName
        `${fi}${m}${li}${emailDomain}`,                 // FirstInitialMiddleNameLastInitial
        `${f}.${mi}.${li}.${rol}${emailDomain}`,        // FirstName.MiddleInitial.LastInitial.Role
    ];

    return emailFormats;
}

// Example usage:
const top40EmailCombinations = generateTop40EmailFormats({
    firstName: "Victoria",
    middleName: "Anne",
    lastName: "Smith",
    domain: "example.com",
    department: "Sales",
    role: "Manager",
    year: "1990",
    number: "01"
});

console.log(top40EmailCombinations);
