document.getElementById('generateBtn').addEventListener('click', function() {
    // Pobranie danych z formularza
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dob: document.getElementById('dob').value,
        pesel: document.getElementById('pesel').value,
        photoLink: document.getElementById('photoLink').value,
        serialNumber: document.getElementById('serialNumber').value,
        issuedBy: document.getElementById('issuedBy').value,
        issueDate: document.getElementById('issueDate').value,
        expiryDate: document.getElementById('expiryDate').value,
        fatherName: document.getElementById('fatherName').value,
        motherName: document.getElementById('motherName').value,
        maidenName: document.getElementById('maidenName').value,
        gender: document.getElementById('gender').value,
        fatherMaidenName: document.getElementById('fatherMaidenName').value,
        motherMaidenName: document.getElementById('motherMaidenName').value,
        birthPlace: document.getElementById('birthPlace').value,
        address: document.getElementById('address').value,
        residenceDate: document.getElementById('residenceDate').value
    };

    // Tworzenie zawartości aplikacji HTML na podstawie wprowadzonych danych
    const appContent = `
        <!DOCTYPE html>
        <html lang="pl">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>xOb Application</title>
            <link rel="stylesheet" href="app.css">
        </head>
        <body>
            <h1>Wygenerowana aplikacja</h1>
            <img src="${formData.photoLink}" alt="Zdjęcie" style="width: 150px; height: 200px;">
            <p><strong>Imię:</strong> ${formData.firstName}</p>
            <p><strong>Nazwisko:</strong> ${formData.lastName}</p>
            <p><strong>Data urodzenia:</strong> ${formData.dob}</p>
            <p><strong>Nr Pesel:</strong> ${formData.pesel}</p>
            <p><strong>Seria i numer:</strong> ${formData.serialNumber}</p>
            <p><strong>Wydany przez:</strong> ${formData.issuedBy}</p>
            <p><strong>Data wydania:</strong> ${formData.issueDate}</p>
            <p><strong>Data ważności:</strong> ${formData.expiryDate}</p>
            <p><strong>Imię ojca:</strong> ${formData.fatherName}</p>
            <p><strong>Imię matki:</strong> ${formData.motherName}</p>
            <p><strong>Nazwisko rodowe:</strong> ${formData.maidenName}</p>
            <p><strong>Płeć:</strong> ${formData.gender}</p>
            <p><strong>Nazwisko rodowe ojca:</strong> ${formData.fatherMaidenName}</p>
            <p><strong>Nazwisko rodowe matki:</strong> ${formData.motherMaidenName}</p>
            <p><strong>Miejsce urodzenia:</strong> ${formData.birthPlace}</p>
            <p><strong>Adres zameldowania:</strong> ${formData.address}</p>
            <p><strong>Data zameldowania:</strong> ${formData.residenceDate}</p>
        </body>
        </html>
    `;

    // Tworzenie obiektu Blob z zawartością aplikacji
    const blob = new Blob([appContent], { type: 'text/html' });
    
    // Tworzenie linku do pobrania pliku
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'index.html'; // Nazwa pliku HTML
    link.click(); // Automatyczne kliknięcie linku, co spowoduje pobranie pliku
});
