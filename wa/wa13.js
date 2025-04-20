// Problem 1
const employees = [
    { firstName: "Sam", 
        department: "Tech", 
        designation: "Manager", 
        salary: 40000, 
        raiseEligible: true },

    { firstName: "Mary",
         department: "Finance", 
         designation: "Trainee", 
         salary: 18500, 
         raiseEligible: true },

    { firstName: "Bill",
         department: "HR", 
         designation: "Executive",
          salary: 21200, 
          raiseEligible: false }
  ];
  
  console.log("Problem 1: Employees JSON");
  console.log(employees);
  
  // Problem 2
  const company = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees
  };
  
  console.log("Problem 2: Company JSON");
  console.log(company);
  
  // Problem 3
  const newEmployee = { firstName: "Anna",
     department: "Tech",
      designation: "Executive", 
      salary: 25600, 
      raiseEligible: false };
  company.employees.push(newEmployee);
  
  console.log("Problem 3: Company JSON after adding Anna");
  console.log(company);
  
  // Problem 4
  let totalSalary = 0;
  company.employees.forEach(emp => totalSalary += emp.salary);
  
  console.log("Problem 4: Total salary of all employees =", totalSalary);
  
  // Problem 5: 
  function applyRaises(company) {
    company.employees.forEach(emp => {
      if (emp.raiseEligible) {
        emp.salary *= 1.10;
        emp.raiseEligible = false;
      }
    });
  }
  
  applyRaises(company);
  console.log("Problem 5: Company JSON after raises applied");
  console.log(company);
  
  // Problem 6: 
  const workingFromHome = ["Anna", "Sam"];
  
  company.employees.forEach(emp => {
    emp.wfh = workingFromHome.includes(emp.firstName);
  });
  
  console.log("Problem 6: Company JSON with working from home updated");
  console.log(company);
  