const validationForm = (event) => {
   event.preventDefault();

   const lastName = event.target[0];
   const firstName = event.target[1];
   const email = event.target[2];
   const message = event.target[3];

   if (!lastName.validity.valid) {
      setError(lastName, 'Veuillez entrer votre nom');
   } else {
      setSuccess(lastName, '');
   }

   if (!firstName.validity.valid) {
      setError(firstName, "Veuillez entrer un prénom");
   } else {
      setSuccess(firstName, '');
   }

   if (!email.validity.valid) {
      setError(email, "Veuillez entrer votre courriel");
   } else if (!isValidEmail(email.value)) {
      setError(email, "Veuillez entrer un courriel valide");
   } else {
      setSuccess(email, '');
   }

   if (!message.validity.valid) {
      setError(message, "Veuillez entrer un message");
   } else {
      setSuccess(message, '');
   }

   if (!lastName.validity.valid || !firstName.validity.valid || !email.validity.valid || !message.validity.valid) {
      return false; 
   } else {
      console.log({ 
         lastName: lastName.value,
         firstName: firstName.value,
         email: email.value,
         message: message.value
      });
      document.getElementById("form").reset(); 
      alert('Information envoyé');
      setTimeout(() => { 
         const inputs = [lastName, firstName, email, message];
         inputs.forEach(input => {
            removeSuccessStyling(input);
         });
      }, 2000);
      return true; 
   }
};

const isValidEmail = emailValue => {
   const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(emailValue).toLowerCase());
};

const setError = (element, message) => {
   const inputControl = element.parentElement;
   const errorDisplay = inputControl.querySelector(".errorMessage");

   errorDisplay.innerText = message;
   inputControl.classList.add('error');
   inputControl.classList.remove('success');
};

const setSuccess = (element, message) => {
   const inputControl = element.parentElement;
   const errorDisplay = inputControl.querySelector(".errorMessage");

   errorDisplay.innerText = message;
   inputControl.classList.add("success");
   inputControl.classList.remove("error");
};

const removeSuccessStyling = (element) => {
   const inputControl = element.parentElement;
   inputControl.classList.remove('success');
};