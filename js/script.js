// CREATE AN ARRAY OF EMPLOYEES
let storage;
let employee = [''];
//let employees = ['Han Solo', 'Kylo Ren', 'Marty McFly', 'Andy DuFreisne', 'Tony Montana'];
// CHECK TO SEE IF STORAGE OBJECT EXISTS WHEN THE PAGE LOADS
// IF DOES, RETURN STORAGE OBJECT INTO ARRAY INSTEAD OF POPULATED ARRAY
const displayEmployee = () =>{
    if (employee.length === 0){
    storage = localStorage.getItem('employee') || ''
    if (storage.length > 0 ){
        employee = storage;
        }
    } 

}

// GET DOM ELEMENTS
let empForm     = document.querySelector('#addForm');
let empTable    = document.querySelector('#employees');
let empCount    = document.querySelector('#empCount');

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS


// ADD EMPLOYEE
empForm.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();
    // GET THE VALUES FROM THE TEXT BOXES
    let empID       = document.querySelector('#id').value;
    let empName     = document.querySelector('#name').value;
    let empExt      = document.querySelector('#extension').value;
    let empEmail    = document.querySelector('#email').value;
    let empDept     = document.querySelector('#department').value;
    // ADD THE NEW EMPLOYEE TO A NEW ARRAY OBJECT
    const addEmployee = () =>{
        if ($('employee').value !== ''){
            employee.push($('employee').value)
            localStorage.setItem('employee', JSON.stringify(employee));
        }
 } 
 let employeeInfo = {
     id : empID,
     name : empName,
     ext : empExt,
     email : empEmail,
     dep : empDept
 };
 localStorage.setItem('employeeInfo', JSON.stringify(employeeInfo))
    // PUSH THE NEW ARRAY TO THE *EXISTING* EMPLOYEES ARRAY

    // BUILD THE GRID

    // RESET THE FORM

    // SET FOCUS BACK TO THE ID TEXT BOX

});

// DELETE EMPLOYEE
empTable.addEventListener('click', (e) => {
    // CONFIRM THE DELETE

        // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)

        // CALL DELETEROW() METHOD TO DELETE SPECIFIC ROW IN THE TABLE

        // REMOVE EMPLOYEE FROM ARRAY

        // BUILD THE GRID

});

// BUILD THE EMPLOYEES GRID
function buildGrid() {
    // REMOVE THE EXISTING SET OF ROWS BY REMOVING THE ENTIRE TBODY SECTION

    // REBUILD THE TBODY FROM SCRATCH

    // LOOP THROUGH THE ARRAY OF EMPLOYEES
    // REBUILDING THE ROW STRUCTURE


    // BIND THE TBODY TO THE EMPLOYEE TABLE

    // UPDATE EMPLOYEE COUNT

    // STORE THE ARRAY IN STORAGE

};