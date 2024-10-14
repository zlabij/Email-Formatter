ffunction generateEmails() {
    // Get values from the form inputs
    const firstName = document.getElementById('first-name').value.toLowerCase();
    const lastName = document.getElementById('last-name').value.toLowerCase();
    const domain = document.getElementById('domain').value.toLowerCase();

    if (firstName && lastName && domain) {
        // Generate email formats
        const emailFormats = {
            "First Name + Domain": `${firstName}@${domain}`,
            "First Name + Last Name + Domain": `${firstName}${lastName}@${domain}`,
            "First Name + Dot + Last Name + Domain": `${firstName}.${lastName}@${domain}`,
            "First Initial + Last Name + Domain": `${firstName[0]}${lastName}@${domain}`,
            "First Name + Last Initial + Domain": `${firstName}${lastName[0]}@${domain}`,
            "Last Name + First Initial + Domain": `${lastName}${firstName[0]}@${domain}`,
            "First Name + Dot + Middle Initial + Dot + Last Name + Domain": `${firstName}.${firstName[0]}.${lastName}@${domain}`,
            "First Name + Dash + Last Name + Domain": `${firstName}-${lastName}@${domain}`,
            "First Initial + Dot + Last Name + Domain": `${firstName[0]}.${lastName}@${domain}`,
            "Last Name + Dot + First Name + Domain": `${lastName}.${firstName}@${domain}`,
            "First Initial + Last Initial + Domain": `${firstName[0]}${lastName[0]}@${domain}`,
            "Last Name + First Name + Domain": `${lastName}${firstName}@${domain}`,
            "First Name + Underscore + Last Name + Domain": `${firstName}_${lastName}@${domain}`,
            "First Initial + Dot + Last Initial + Domain": `${firstName[0]}.${lastName[0]}@${domain}`,
            "First Name + Dash + Last Name + Domain": `${firstName}-${lastName}@${domain}`,
            "First Initial + Dash + Last Name + Domain": `${firstName[0]}-${lastName}@${domain}`,
            "First Name + Dot + Last Initial + Domain": `${firstName}.${lastName[0]}@${domain}`,
            "Last Name + Underscore + First Initial + Domain": `${lastName}_${firstName[0]}@${domain}`
            "First Name + Dot + Last Name + Domain": `${firstName}.${lastName}@${domain}`,
            "First Name + Dash + Last Name + Domain": `${firstName}-${lastName}@${domain}`,
            "Last Name + Dot + First Name + Number + Domain": `${lastName}.${firstName}123@${domain}`,
            "Last Name + Underscore + First Name + Domain": `${lastName}_${firstName}@${domain}`,
            "First Name + Dot + Last Name + Number + Domain": `${firstName}.${lastName}123@${domain}`,
            "First Initial + Last Initial + Domain": `${firstName[0]}${lastName[0]}@${domain}`,
            "Last Initial + Underscore + First Name + Domain": `${lastName[0]}_${firstName}@${domain}`,
            "Last Name + Dot + First Initial + Number + Domain": `${lastName}.${firstName[0]}1@${domain}`,
            "First Name + Dot + Last Name + Mail Domain": `${firstName}.${lastName}@mail.${domain}`,
            "First Name + Dash + Last Name + Mail Domain": `${firstName}-${lastName}@mail.${domain}`,
            "First Name + Last Initial + Domain": `${firstName}${lastName[0]}@${domain}`,
            "Last Name + First Name + Domain": `${lastName}${firstName}@${domain}`,
            "Last Initial + Dot + First Name + Domain": `${lastName[0]}.${firstName}@${domain}`,
            "First Name + Dash + Last Initial + Domain": `${firstName}-${lastName[0]}@${domain}`,
            "First Initial + Dot + Last Name + Mail Domain": `${firstName[0]}.${lastName}@mail.${domain}`,
            "Last Initial + First Initial + Domain": `${lastName[0]}${firstName[0]}@${domain}`,
            "First Name + Dot + Last Name + Corporate Domain": `${firstName}.${lastName}@corp.${domain}`,
            "First Name + Dot + Last Name + Company Domain": `${firstName}.${lastName}@company.${domain}`
           
          
           
        };

        // Display the generated emails
        const outputDiv = document.getElementById('output');
        outputDiv.innerHTML = "<h3>Generated Emails:</h3>";
        Object.keys(emailFormats).forEach(format => {
            outputDiv.innerHTML += `<p><strong>${format}:</strong> ${emailFormats[format]}</p>`;
        });
    } else {
        // Handle error if fields are empty
        alert("Please fill in all fields.");
    }
}
