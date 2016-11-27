var contacts = [
    {
        "firstName" : "John",
        "lastName" : "Doe",
        "phone" : "(512) 355-0453",
        "email" : "johndoe@email.com"
    },
    {
        "firstName" : "Jane",
        "lastName" : "Doe",
        "phone" : "(312) 641-2203",
        "email" : "janedoe@email.com"
    },
    {
        "firstName" : "Suzie",
        "lastName" : "Smith",
        "phone" : "(415) 604-4219",
        "email" : "suziesmith@email.com"
    }
];




function addContact (newContact) {
    contacts.push(newContact);
    return contacts;
}

function listContacts () {
    var fullName = [];
    for (i = 0; i < contacts.length; i++) {
        fullName.push(contacts[i].firstName + " " + contacts[i].lastName);
    }
    return fullName;
}

function search (name){
    var result = [];
    for (i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName) {
            result.push(contacts[i].firstName + " " + contacts[i].lastName);
        } else if (name === contacts[i].lastName) {
                result.push(contacts[i].firstName + " " + contacts[i].lastName);
        }
    } return result;
}
