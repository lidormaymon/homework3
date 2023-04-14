

function chkUsername() {
    const username = document.getElementById('usernameInput').value;
    const alretUsername = document.getElementById('usernameComment');
    if (username.trim() === '' || username.length <= 5 || username.length > 12) {
        alretUsername.innerHTML = 'Please enter a valid name that must contain more than 5 chars and less than'
        alretUsername.style.color = 'red'
    }else if (username.length > 5 && username.length <= 12){
        alretUsername.innerHTML = 'Successful!'
        alretUsername.style.color = 'green'
    }
}

function chkPassword() {
    const password = document.getElementById('passwordInput').value;
    const alretPwd = document.getElementById('passwordComment');
    if (password.trim() === '' || password.length <= 6 || password.length > 15){
        alretPwd.innerHTML = 'Please enter a valid password that contain more than 6 chars and less than 16'
        alretPwd.style.color = 'red'
    }else if (password.length > 6 || password.length <= 15){
        alretPwd.innerHTML = 'Successful!'
        alretPwd.style.color = 'green'
    }

}

function chkGender() {
    const male = document.querySelector('input[name="gender"][value="male"]');
    const female = document.querySelector('input[name="gender"][value="female"]');
    const alretGender = document.getElementById('genderComment');
    if (!male.checked && !female.checked) {
        alretGender.innerHTML = 'Must pick a gender';
        alretGender.style.color = 'red'
    }else {
        alretGender.innerHTML = 'Successful!';
        alretGender.style.color = 'green';
    }

}

//calc the age of the user by taking his birthdate from input
function calcAge() {
    const userBirthdate = new Date(document.getElementById('birthdate').value);//declaring a virable for our birthdate input value
    const ageDifferenceSeconds = Date.now() - userBirthdate.getTime();//calcing the date of today minus the userbirthdate - getting his age in miliesconds
    const userAgeFloat = ageDifferenceSeconds / 3.156e+10;//dividing the user age in miliseconds to a year in milieseconds, taken this number from google
    const userAge = Math.floor(userAgeFloat);//declaring that the user age would always be a full num and not float
    const ageAlret = document.getElementById('birthdateComment');//declaring a virable for our div where alrets if he failed or not would show up

    if (isNaN(userAge) || userAge < 18 || userAge > 100){
        ageAlret.innerHTML = 'You must be between 18 and 100 years old';
        ageAlret.style.color = 'red';
    }else {
        ageAlret.innerHTML = 'Successful!';
        ageAlret.style.color = 'green'
    }
}


function chkData() {
    chkUsername()
    chkPassword()
    chkGender()
    calcAge()
}