//VARIABLES
let employeeName = document.getElementById(`employee-name`);
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
let facultySalary;
let regularSalary;

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
        if (bachelorDegree.checked) {
            hourlyRate = 100;
            monthlyTeachingAllowance = 600;
        }
        else if(masterDegree.checked) {
            hourlyRate = 175;
            monthlyTeachingAllowance = 1500;
        }
    
        facultySalary = (employeeWorkHours.value * hourlyRate) + monthlyTeachingAllowance;
    
        console.log(`Faculty gross salary: $${facultySalary}`);
    } 
    else if(regularEmployee.checked) {
        if(employeeWorkHours.value == 160){
            regularSalary = regularSalaryInput.value;
            console.log(`exactly 160`);
        }
        else if(employeeWorkHours.value < 160) {
            regularSalary = (regularSalaryInput.value / 160) * employeeWorkHours.value;
            console.log(`less than 160`);
        }
        else if(employeeWorkHours.value > 160) {
            let extraHours = (parseInt(employeeWorkHours.value) - 160) * 2;
            employeeWorkHours.value = parseInt(employeeWorkHours.value) + extraHours;
            regularSalary = (regularSalaryInput.value / 160) * employeeWorkHours.value;
            console.log(`more than 160`);
        }
        console.log(`Regular employee fixed salary:$${regularSalary}`);
    }
}



//EXECUTION

facultyEmployee.addEventListener("click",displayFacultyQualificationCode);
regularEmployee.addEventListener("click",displayRegularSalary);
calculateButton.addEventListener("click", calculatePayroll);