function generateTop40EmailFormats({
    firstName,
    middleName = '',
    lastName,
    domain,
    department = '',
    role = '',
    location = '',
    year = '',
    number = ''
}) {
    const f = firstName.toLowerCase();
    const m = middleName ? middleName.toLowerCase() : '';
    const l = lastName.toLowerCase();
    const fi = f.charAt(0);
    const mi = m.charAt(0);
    const li = l.charAt(0);
    const emailDomain = `@${domain.toLowerCase()}`;

    const emailFormats = [];

    // 1. FirstName.LastName@domain.com
    emailFormats.push(`${f}.${l}${emailDomain}`);

    // 2. FirstInitial.LastName@domain.com
    emailFormats.push(`${fi}.${l}${emailDomain}`);

    // 3. FirstName@domain.com
    emailFormats.push(`${f}${emailDomain}`);

    // 4. FirstNameLastName@domain.com
    emailFormats.push(`${f}${l}${emailDomain}`);

    // 5. LastName@domain.com
    emailFormats.push(`${l}${emailDomain}`);

    // 6. LastName.FirstInitial@domain.com
    emailFormats.push(`${l}.${fi}${emailDomain}`);

    // 7. FirstInitialLastName@domain.com
    emailFormats.push(`${fi}${l}${emailDomain}`);

    // 8. FirstInitial.LastInitial@domain.com
    emailFormats.push(`${fi}.${li}${emailDomain}`);

    // 9. FirstName.LastInitial@domain.com
    emailFormats.push(`${f}.${li}${emailDomain}`);

    // 10. FirstInitialLastInitialLastName@domain.com
    emailFormats.push(`${fi}${mi}${l}${emailDomain}`);

    // 11. FirstName.LastName.Department@domain.com
    if (department) emailFormats.push(`${f}.${l}.${department.toLowerCase()}${emailDomain}`);

    // 12. FirstName.MiddleInitial.LastName@domain.com
    if (middleName) emailFormats.push(`${f}.${mi}.${l}${emailDomain}`);

    // 13. FirstName_LastName@domain.com
    emailFormats.push(`${f}_${l}${emailDomain}`);

    // 14. FirstName.MiddleName.LastName@domain.com
    if (middleName) emailFormats.push(`${f}.${m}.${l}${emailDomain}`);

    // 15. FirstName-LastName@domain.com
    emailFormats.push(`${f}-${l}${emailDomain}`);

    // 16. FirstInitial.MiddleInitial.LastName@domain.com
    if (middleName) emailFormats.push(`${fi}.${mi}.${l}${emailDomain}`);

    // 17. FirstNameLastNameInitial@domain.com
    emailFormats.push(`${f}${l}${mi}${emailDomain}`);

    // 18. FirstInitial.MiddleInitial.LastInitial@domain.com
    if (middleName) emailFormats.push(`${fi}.${mi}.${li}${emailDomain}`);

    // 19. FirstName.MiddleInitial.LastInitial@domain.com
    if (middleName) emailFormats.push(`${f}.${mi}.${li}${emailDomain}`);

    // 20. FirstName_LastInitial@domain.com
    emailFormats.push(`${f}_${li}${emailDomain}`);

    // 21. FirstInitial-LastName@domain.com
    emailFormats.push(`${fi}-${l}${emailDomain}`);

    // 22. FirstInitial.MiddleName.LastInitial@domain.com
    if (middleName) emailFormats.push(`${fi}.${m}.${li}${emailDomain}`);

    // 23. FirstNameMiddleInitialLastName@domain.com
    if (middleName) emailFormats.push(`${f}${mi}${l}${emailDomain}`);

    // 24. FirstName.LastName.Year@domain.com
    if (year) emailFormats.push(`${f}.${l}.${year}${emailDomain}`);

    // 25. FirstInitial.LastInitial.LastName@domain.com
    if (middleName) emailFormats.push(`${fi}.${li}.${l}${emailDomain}`);

    // 26. FirstName.LastName.Role@domain.com
    if (role) emailFormats.push(`${f}.${l}.${role.toLowerCase()}${emailDomain}`);

    // 27. FirstName.LastName.Location@domain.com
    if (location) emailFormats.push(`${f}.${l}.${location.toLowerCase()}${emailDomain}`);

    // 28. FirstInitial.MiddleName.LastName@domain.com
    if (middleName) emailFormats.push(`${fi}.${m}.${l}${emailDomain}`);

    // 29. LastNameFirstInitial@domain.com
    emailFormats.push(`${l}${fi}${emailDomain}`);

    // 30. FirstNameLastInitial@domain.com
    emailFormats.push(`${f}${li}${emailDomain}`);

    // 31. FirstName.LastName.Number@domain.com
    if (number) emailFormats.push(`${f}.${l}.${number}${emailDomain}`);

    // 32. FirstInitialLastNameNumber@domain.com
    if (number) emailFormats.push(`${fi}${l}${number}${emailDomain}`);

    // 33. LastName.FirstInitial.Number@domain.com
    if (number) emailFormats.push(`${l}.${fi}.${number}${emailDomain}`);

    // 34. FirstNameLastNameMiddleInitial@domain.com
    if (middleName) emailFormats.push(`${f}.${l}.${mi}${emailDomain}`);

    // 35. FirstInitialMiddleInitialLastInitial@domain.com
    if (middleName) emailFormats.push(`${fi}.${mi}.${li}${emailDomain}`);

    // 36. FirstName-MiddleInitial.LastName@domain.com
    if (middleName) emailFormats.push(`${f}-${mi}.${l}${emailDomain}`);

    // 37. FirstName.MiddleName.LastInitial@domain.com
    if (middleName) emailFormats.push(`${f}.${m}.${li}${emailDomain}`);

    // 38. FirstInitial.LastInitial.Role@domain.com
    if (role) emailFormats.push(`${fi}.${li}.${role.toLowerCase()}${emailDomain}`);

    // 39. FirstName.MiddleInitialLastName.Year@domain.com
    if (middleName && year) emailFormats.push(`${f}.${mi}.${l}.${year}${emailDomain}`);

    // 40. LastName.FirstName.Role@domain.com
    if (role) emailFormats.push(`${l}.${f}.${role.toLowerCase()}${emailDomain}`);

    // Remove duplicates and return unique email formats
    return [...new Set(emailFormats.filter(Boolean))];
}

// Example usage:
const emailFormats = generateTop40EmailFormats({
    firstName: "Victoria",
    middleName: "Anne",
    lastName: "Smith",
    domain: "example.com",
    department: "Sales",
    role: "Manager",
    location: "NY",
    year: "1990",
    number: "01"
});

console.log(emailFormats);
