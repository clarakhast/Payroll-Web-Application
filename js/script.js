//VARIABLES
let employeeName = document.getElementById(`employee-name`);
let employeeNumber = document.getElementById(`employee-number`);
let employeeWorkHours = document.getElementById(`work-hours`);
let calculateButton = document.getElementById(`calculate`);
let facultyEmployee = document.getElementById(`faculty`);
let regularEmployee = document.getElementById(`regular`);
let employeeForm =document.getElementById(`form`);
let facultyQualification = document.getElementById(`hidden`);
let payrollResult = document.getElementById(`result`);
let masterDegree = document.getElementById(`master`);
let bachelorDegree = document.getElementById(`bachelor`);
let hourlyRate;
let monthlyTeachingAllowance;

//FUNCTIONS
function displayFacultyQualificationCode() {
    if (facultyQualification.classList.contains('hidden')) {
       facultyQualification.classList.remove('hidden');
       facultyQualification.classList.add('show');
      }
}

function regularWorkersInfo(){

}

function facultyGrossSalary() {
    if (bachelorDegree.checked) {
        hourlyRate = 100;
        monthlyTeachingAllowance = 600;
        alert(`Hourly rate is: $${hourlyRate} Monthly teching allowance is: $${monthlyTeachingAllowance}`) ;
    }
    else if(masterDegree.checked) {
        hourlyRate = 175;
        monthlyTeachingAllowance = 1500;
        alert(`Hourly rate is: $${hourlyRate} Monthly teching allowance is: $${monthlyTeachingAllowance}`) ;
    }
}

function calculatePayroll() {
    alert(`employee number: ${employeeNumber.value}`);
}



//EXECUTION

facultyEmployee.addEventListener("click",displayFacultyQualificationCode);
regularEmployee.addEventListener("click",regularWorkersInfo);
calculateButton.addEventListener("click", facultyGrossSalary);