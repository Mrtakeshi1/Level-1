let employees = []

function Employees (name, jobTitle, salary, status = "Full Time") {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary
    this.status = status
    this.printEmployeeForm = function(){
    console.log(this.name + " " + this.jobTitle + " " + this.salary + " " + this.status)
    }
}

const takeshi = new Employees("Takeshi", "Developer", "$85,000 /year", "Full Time" )

const xavier = new Employees("Xavier", "Doctor", "$100,000 /year", "Contract")

const hiroshi = new Employees("Hiroshi", "Streamer", "$75,000 /year", "Part Time")

employees.push(Employees)

takeshi.printEmployeeForm()
xavier.printEmployeeForm()
hiroshi.printEmployeeForm()