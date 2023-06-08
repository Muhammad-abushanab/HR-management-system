function Employee(id, fullName, department, level, imgURL, salary) {
    this.id = id;
    this.fullName = fullName;
    this.department = department;
    this.imgURL = imgURL;
    this.salary = salary;
    this.level = level;

}

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
Employee.prototype.renderWithNameAndSalary = function (emp) {
    document.querySelector('.container').innerHTML += createCard(emp.fullName, emp.salary,emp.level)
}
const generateRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const createCard = function (name, salary,lvl) {
    return `<div class="card">
  <img src="./assets/img/avatar2.png" alt="Avatar">
  <div class="employee-container">
    <div class="flex"><h3><b> ${name}</b></h3>  <h4><b>Candidte Level: ${lvl}</b></h4></div>
    <p>Salary: ${salary}</p>
  </div>
</div>`
}
const emp1 = new Employee(1000, 'Ghazi Samer', 'Administration', 'senior', "any", 0);
const emp2 = new Employee(1001, 'Lana Ali', 'Finance', 'senior', "any", 0);
const emp3 = new Employee(1002, 'Tamara Ayoub', 'Marketing', 'senior', "any", 0);
const emp4 = new Employee(1003, 'Safi Walid', 'Administration', 'mid-senior', "any", 0);
const emp5 = new Employee(1004, 'Omar Zaid', 'Development', 'senior', "any", 0);
const emp6 = new Employee(1005, 'Rana Saleh', 'Development', 'junior', "any", 0);
const emp7 = new Employee(1006, 'Hadi Ahmad', 'Finance', 'mid-senior', "any", 0);

const employees = [emp1,emp2,emp3,emp4,emp5,emp6,emp7];

employees.forEach(emp => {
    console.log(emp);
    emp.salary = emp.calculateSalary(emp.level);
    emp.renderWithNameAndSalary(emp);
})