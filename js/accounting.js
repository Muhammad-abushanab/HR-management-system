let employees = JSON.parse(localStorage.getItem('employees'));
const depts = [];
const departmentInfo = {}
employees.forEach(emp => {
    if (!departmentInfo[emp.department]) {
        if (!depts.includes(emp.department.toLowerCase())) { depts.push(emp.department.toLowerCase()) };
        departmentInfo[emp.department.toLowerCase()] = {
            count: 1,
            totalSalary: emp.salary,
            avg: 0
        }
    } else {
        departmentInfo[emp.department].count += 1;
        departmentInfo[emp.department].totalSalary += emp.salary;
    }
})

const tableBody = document.getElementById('table-body');
console.log(table);
depts.forEach(dept => {
    const tr = document.createElement('tr');
    tr.classList.add(`${dept}`);
    const td = document.createElement('td');
    td.textContent = dept;
    tr.appendChild(td)
    tableBody.appendChild(tr);
})

for (const key in departmentInfo) {
    if (Object.hasOwnProperty.call(departmentInfo, key)) {
        const dept = departmentInfo[key];
        dept.avg = Math.floor(dept.totalSalary / dept.count);
        const tr = document.querySelector(`.${key}`);
        tr.innerHTML += `<td>${dept.count}</td><td>${dept.totalSalary}</td><td>${dept.avg}</td>`;

    }
}
const totalSalary = document.querySelector('.total-salary');
const totalAvg = document.querySelector('.total-avg');
const totalEmp = document.querySelector('.total-emp');

for (const key in departmentInfo) {
    if (Object.hasOwnProperty.call(departmentInfo, key)) {
        const dept = departmentInfo[key];
        totalAvg.innerHTML=Number(totalAvg.innerHTML) + Number(dept.avg);
        totalSalary.innerHTML=Number(totalSalary.innerHTML) +  Number(dept.totalSalary);
        totalEmp.innerHTML= Number(totalEmp.innerHTML) + Number(dept.count);
    }
}