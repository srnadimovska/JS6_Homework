const nameInput = document.getElementById("nameInput");
const nameInputError = document.getElementById("nameInputError");

const lastnameInput = document.getElementById("lastnameInput");

const emailInput = document.getElementById("emailInput");
const emailInputError = document.getElementById("emailInputError");

const ageInput = document.getElementById("ageInput");
const ageInputError = document.getElementById("ageInputError");

const passwordInput = document.getElementById("passwordInput");
const passwordInputError = document.getElementById("passwordInputError");

const studentTable = document.getElementById("studentTable");

function validateForm() {
  if (nameInput.value.length < 6) {
    nameInputError.innerText = "Name must be longer than 6 letters";
    return false;
  }
   else
  {
    nameInputError.innerText = "";
  }

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(emailInput.value)) {
          emailInputError.innerText = "Invalid email adress";
            
        return false;
        }
        else {
            emailInputError.innerText = "";
        }
 
  if (ageInput.value < 18) {
        ageInputError.innerText = "Age must be over 18";
        return false;
      } 
      else
      {
      ageInputError.innerText = "";
      
    }

   if (passwordInput.value.length < 4) {
            passwordInputError.innerText = "Password must be longer than 4 letters";
            return false;
          }
          else {
        
          passwordInputError.innerText = "";
          
        }

        

        return true;
    }

//   if (validateEmail(email)) {
//     emailInputError.innerText = "";
//   } else {
//     emailInputError.innerText = "Invalid email";
//   }

//   if (validatePassword()) {
//     const passwordCell = row.insertCell();
//     passwordCell.innerText = passwordInput.value;

//   }
//   return true;


// function validateEmail(email) {
//   const e = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//   return e.test(emailInput.value);
// }

// function validateAge() {
//   if (ageInput.value < 18) {
//     ageInputError.innerText = "Age must be over 18";
//     return false;
//   }
//   ageInputError.innerText = "";
//   return true;
// }

// function validatePassword() {
//   if (passwordInput.value.length < 4) {
//     passwordInputError.innerText = "Password must be longer than 4 letters";
//     return false;
//   }

//   passwordInputError.innerText = "";
//   return true;
// }

function addStudent() {
  if (validateForm()) {

    const row = studentTable.insertRow();

    const nameCell = row.insertCell();
    const lastnameCell = row.insertCell();
    const emailCell = row.insertCell();
    const ageCell = row.insertCell();
    const passwordCell = row.insertCell();
    const actionsCell = row.insertCell();

    nameCell.innerText = nameInput.value;
    lastnameCell.innerText = lastnameInput.value;
    emailCell.innerText = emailInput.value;
    ageCell.innerText = ageInput.value;
    passwordCell.innerText = passwordInput.value;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", () => {
      row.remove();
    });

    actionsCell.appendChild(deleteBtn);
  }

  
}
