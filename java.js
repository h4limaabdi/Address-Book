const form = document.getElementById('contactForm');
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const phoneInput = document.getElementById('phoneNumber');
const outputDiv = document.getElementById('output');

const addressBook = [];

function Contact(firstName, lastName, phoneNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
}

function addContact(firstName, lastName, phoneNumber){
    const contact = new Contact(firstName,lastName, phoneNumber);
    addressBook.push(contact);
    displayContacts();
}

function displayContacts() {
  outputDiv.innerHTML = '';
  addressBook.forEach((contact, index) => {
    const p = document.createElement('p');
    p.textContent = `${index + 1}. ${contact.firstName} ${contact.lastName} — ${contact.phoneNumber}`;
    outputDiv.appendChild(p);
  });
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstNameValue = firstNameInput.value.trim();
  const lastNameValue = lastNameInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  if (firstNameValue && lastNameValue && phoneValue) {
    addContact(firstNameValue, lastNameValue, phoneValue);
    form.reset();
  }
});