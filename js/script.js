//VARIABLES
let employeeName = document.getElementById(`employee-name`);
let employeeDepartment = document.getElementById(`department`);
let employeeNumber = document.getElementById(`employee-number`);
let employeeWorkHours = document.getElementById(`work-hours`);
let calculateButton = document.getElementById(`calculate`);
let facultyEmployee = document.getElementById(`faculty`);
let regularEmployee = document.getElementById(`regular`);
let regularSalaryInput = document.getElementById(`r-salary`);
let employeeForm =document.getElementById(`form`);
let facultyQualification = document.getElementById(`hidden`);
let regularFixedSalary = document.getElementById(`r-hidden`);
let payrollResult = document.getElementById(`result`);
let masterDegree = document.getElementById(`master`);
let bachelorDegree = document.getElementById(`bachelor`);
let hourlyRate;
let monthlyTeachingAllowance;
let employeeNetPay;
let canadianIncomeTax;
let healthSurchargeFee;
let employeeGrossSalary;
let displayResults = document.getElementById(`result`);
let employeeType;

//FUNCTIONS
function displayFacultyQualificationCode() {
    if (facultyQualification.classList.contains('hidden') && regularFixedSalary.classList.contains('r-hidden')) {
       facultyQualification.classList.remove('hidden');
       facultyQualification.classList.add('show');
      } 
      else if(facultyQualification.classList.contains('hidden') && regularFixedSalary.classList.contains('show')) {
        regularFixedSalary.classList.remove('show');
        regularFixedSalary.classList.add('r-hidden');
        facultyQualification.classList.remove('hidden');
       facultyQualification.classList.add('show');
      }
}

function displayRegularSalary(){
    if (regularFixedSalary.classList.contains('r-hidden') && facultyQualification.classList.contains('hidden')) {
        regularFixedSalary.classList.remove('r-hidden');
        regularFixedSalary.classList.add('show');
       } 
       else if(regularFixedSalary.classList.contains('r-hidden') && facultyQualification.classList.contains('show')) {
        facultyQualification.classList.remove('show');
        facultyQualification.classList.add('hidden');
        regularFixedSalary.classList.remove('r-hidden');
        regularFixedSalary.classList.add('show');
       }
}

function calculatePayroll() {
    if(facultyEmployee.checked) {
        employeeType = `Faculty`;
        if (bachelorDegree.checked) {
            hourlyRate = 100;
            monthlyTeachingAllowance = 600;
        }
        else if(masterDegree.checked) {
            hourlyRate = 175;
            monthlyTeachingAllowance = 1500;
        }
    
        employeeGrossSalary = (parseInt(employeeWorkHours.value) * hourlyRate) + monthlyTeachingAllowance;

        if(employeeGrossSalary > 3000) {
            healthSurchargeFee = 33;
        }
        else if(employeeGrossSalary <= 3000) {
            healthSurchargeFee = 19.20;
        }
    
        if(employeeGrossSalary <= 2500) {
            canadianIncomeTax = 0;
        } else {
            canadianIncomeTax = 0.25;
        }
        employeeNetPay = employeeGrossSalary - (employeeGrossSalary * canadianIncomeTax) - healthSurchargeFee;
        
        console.log(`Faculty gross salary: $${employeeGrossSalary} Faculty net pay: $${employeeNetPay}`);
    } 
    else if(regularEmployee.checked) {
        employeeType = `Regular`;
        if(employeeWorkHours.value == 160){
            employeeGrossSalary = parseInt(regularSalaryInput.value);
            console.log(`exactly 160`);
        }
        else if(employeeWorkHours.value < 160) {
            employeeGrossSalary = (parseInt(regularSalaryInput.value) / 160) * employeeWorkHours.value;
            console.log(`less than 160`);
        }
        else if(employeeWorkHours.value > 160) {
            let extraHours = (parseInt(employeeWorkHours.value) - 160) * 2;
            employeeWorkHours.value = parseInt(employeeWorkHours.value) + extraHours;
            employeeGrossSalary = (parseInt(regularSalaryInput.value) / 160) * employeeWorkHours.value;
            console.log(`more than 160`);
        }
        if(employeeGrossSalary > 3000) {
            healthSurchargeFee = 33;
        }
        else if(employeeGrossSalary <= 3000) {
            healthSurchargeFee = 19.20;
        }
    
        if(employeeGrossSalary <= 2500) {
            canadianIncomeTax = 0;
        } else {
            canadianIncomeTax = 0.25;
        }
        employeeNetPay = employeeGrossSalary - (employeeGrossSalary * canadianIncomeTax) - healthSurchargeFee;

        console.log(`Regular employee fixed salary:$${employeeGrossSalary} Regular net pay: $${employeeNetPay}`);
    }

    displayResults.innerHTML = `
    <h3>Employee Info:</h3>
    <p>Employee Name: ${employeeName.value}</p>
    <p>Employee Number: ${employeeNumber.value}</p>
    <p>Employee Department: ${employeeDepartment.value}</p>
    <p>Employee Type: ${employeeType}</p>
    <p>Employee Work Hours: ${employeeWorkHours.value}</p>
    <p>Employee Gross Salary: $${employeeGrossSalary}</p>
    <h3>Deductions:</h3>
    <p>Canadian Income Tax: ${canadianIncomeTax*100}%</p>
    <p>Health Surcharge Fee : $${healthSurchargeFee}</p>
    <h3>Net Pay</h3>
    <p>Employee Net Pay: $${employeeNetPay}</p>
    ` 
}



//EXECUTION

facultyEmployee.addEventListener("click",displayFacultyQualificationCode);
regularEmployee.addEventListener("click",displayRegularSalary);
calculateButton.addEventListener("click", calculatePayroll);