const form = document.getElementById('add-employee-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target.fullName.value;
    const image = e.target.imgUrl.value;
    const level = e.target.level.value;
    const dept = e.target.department.value;
    const emp = new Employee(idGenerate(),name,dept,level,image,0);
    emp.salary = emp.calculateSalary(level);
    emp.render(emp);
    form.reset()
})
function Employee(id, fullName, department, level, imgURL, salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.imgURL = imgURL;
    this.salary = salary;
    this.level = level;

}
const emp1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'senior', "./assets/img/avatar2.png", 0);
const emp2 = new Employee(1001, 'Lana Ali', 'Finance', 'senior', "./assets/img/avatar2.png", 0);
const emp3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'senior', "./assets/img/avatar2.png", 0);
const emp4 = new Employee(1003, 'Safi Walid', 'Administration', 'mid-senior', "./assets/img/avatar2.png", 0);
const emp5 = new Employee(1004, 'Omar Zaid', 'Development', 'senior', "./assets/img/avatar2.png", 0);
const emp6 = new Employee(1005, 'Rana Saleh', 'Development', 'junior', "./assets/img/avatar2.png", 0);
const emp7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'mid-senior', "./assets/img/avatar2.png", 0);

const employees = [emp1, emp2, emp3, emp4, emp5, emp6, emp7];

Employee.prototype.calculateSalary = function (lvl) {
    let min, max;
    let salary = 0;
    switch (lvl.toLowerCase()) {
        case 'senior':
            max = 2000;
            min = 1500;
            salary = generateRandomNumber(max, min);
            console.log(salary);
            salary -= Math.floor(salary * .075);
            console.log(salary);
            break;
        case 'mid-senior':
            max = 1500;
            min = 1000;
            salary = generateRandomNumber(max, min);
            console.log(salary);
            salary -= Math.floor(salary * .075);
            console.log(salary);
            break;
        case 'junior':
            max = 1000;
            min = 500;
            salary = generateRandomNumber(max, min);
            console.log(salary);
            salary -= Math.floor(salary * .075);
            console.log(salary);
            break;

        default:
            break;
    }
    return salary
}
Employee.prototype.render = function (emp) {
    document.querySelector(`.${emp.department.toLowerCase()}`).innerHTML += createCard(emp)
}
const idGenerate = function () {
    const min = 1000;
    const max = 9999;

    const employeeId = Math.floor(Math.random() * (max - min + 1)) + min;

    return employeeId;
}

const generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const createCard = function (emp) {
    return `<div class="card">
  <img src="${emp.imgURL}" alt="Avatar">
   <hr>
  <div class="employee-container">
    <div class="flex">
    <div class ="space-between">    
        <h3 class= "name">
                <b> ${emp.fullName}</b>
        </h3>
        <h3 class= "id">
                <b> ${emp.id}</b>
        </h3>
    </div>
        <h4 class = "level">
            <b>Candidate Level: ${emp.level}</b>
        </h4>
    </div
    <p>Salary: ${emp.salary}</p>
  </div>
</div>`
}


employees.forEach(emp => {
    console.log(emp);
    emp.salary = emp.calculateSalary(emp.level);
    emp.render(emp);
})