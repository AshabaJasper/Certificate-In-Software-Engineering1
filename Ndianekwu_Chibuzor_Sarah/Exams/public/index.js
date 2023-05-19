const validation = () => {
    let isValid = true;
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let dob = document.getElementById("dob")
    let  town = document.getElementById("town")
    let  zip = document.getElementById("zip")
    let  state = document.getElementById("state")
    let  ph1 = document.getElementById("ph1")
    let  ph2 = document.getElementById("ph2")
    let  email = document.getElementById("email")
    let  country = document.querySelector("#country")
    let  gender = document.querySelector("#gender")

    let regexf= /^[^\d]+$/;


        if (fname.value === "") {
            fname.style.border = "2px red solid";
            fname.setAttribute("placeholder", "Enter your first name here");
            isValid = false;
          }
          else if (fname.value.length < 2) {
            fname.style.border = "2px red solid";
            fname.setAttribute("placeholder", "Enter your first name here");
            isValid = false;
          }
          else if (fname.value.length > 255) {
            fname.style.border = "2px red solid";
            fname.setAttribute("placeholder", "Enter your first name here");
            isValid = false;
          }
          else if (!regexf.test(input.value)) {
            fname.style.border = "2px red solid";
            fname.setAttribute("placeholder", "No number is alllowed");
            isValid = false;
          }
          else{
              fname.style ="2px green solid"
          }

    
        if (lname.value === "") {
            lname.style.border = "2px red solid";
            lname.setAttribute("placeholder", "Enter your last name here");
            isValid = false;}
          else if (lname.value.length < 2) {
            lname.style.border = "2px red solid";
            lname.setAttribute("placeholder", "Enter your last name here");
            isValid = false;
          }
          else if (fname.value.length > 255) {
            lname.style.border = "2px red solid";
            lname.setAttribute("placeholder", "Enter your last name here");
            isValid = false;
          }
          else if (!regexf.test(input.value)) {
            lname.style.border = "2px red solid";
            lname.setAttribute("placeholder", "Enter your last name here");
            isValid = false;
          }
          else{
              lname.style ="2px green solid"
          }



          // dob

        let dobValue = dob.value;
        let dobDate = new Date(dobValue);
  
      //calculating user age
      let ageDiff = Date.now() - dobDate.getTime();
      let ageDate = new Date(ageDiff);
      let age = Math.abs(ageDate.getUTCFullYear() - 1970);
        if (dob.value === "") {
            dob.style.border = "2px red solid";
            dob.setAttribute("placeholder", "Enter your age");
            isValid = false;}
        else if (age< 18) {
              dob.style.border = "2px red solid";
              dob.setAttribute("placeholder", "Enter your correct age");
              isValid = false;
            }
        else{
              dob.style ="2px green solid"
          }

        

        


          // state
          if (state.value === "") {
            state.style.border = "2px red solid";
            state.setAttribute("placeholder", "Enter your State/District here");
            isValid = false;}
          else{
          state.style ="2px green solid"
          }

          //  town 

          if(town.value === "") {
            town.style.border = "2px red solid";
            town.setAttribute("placeholder", "Enter your town here");
            isValid = false;}
          else{
              town.style ="2px green solid"
          }

          // zip

          if (zip.value === "") {
            zip.style.border = "2px red solid";
            zip.setAttribute("placeholder", "Zip Code");
            isValid = false;}
          else{
          zip.style ="2px green solid"
          }

          // phone 1
          if (ph1.value === "") {
            ph1.style.border = "2px red solid";
            ph1.setAttribute("placeholder", "Phone Number1");
            isValid = false;}
          else{
          ph1.style ="2px green solid"
          }

          // phone2
          if (ph2.value === "") {
            ph2.style.border = "2px red solid";
            ph2.setAttribute("placeholder", "Phone Number2");
            isValid = false;}
          else{
          ph2.style ="2px green solid"
          }

          // email
    
          if (email.value === "") {
            email.style.border = "2px red solid";
            email.setAttribute("placeholder", "Enter your Email here");
            isValid = false;}
          else{
          email.style ="2px green solid"
          }

          // gender
          if (gender.value === "") {
            gender.style.border = "2px red solid";
            gender.setAttribute("placeholder", "Select Your gender");
            isValid = false;
          } else {
            gender.style.border = "2px green solid";
          }

          country
          if (country.value === "") {
            country.style.border = "2px red solid";
            country.setAttribute("placeholder", "Select Your country");
            isValid = false;
          } else {
            country.style.border = "2px green solid";
          }
    
  
    return isValid;
  }