var employees=[]
function employee(employeeid,fullname,department,level,imageurl,salary) {
    this.employeeid=employeeid ;
    this.fullname=fullname;
    this.department=department;
    this.level=level;
    this.imageurl=imageurl;
    this.salary=salary;
    employees.push(this);
    
    
}
let ghazisamer=new employee (1000,"Ghazi samer", "administration ", "senior", "url",salary);
let lanaali=new employee( 1001,"lanaali","finance","senior","url",salary );
let tamaraayoub=new employee(1002,"tamara ayoub","markiting","senior","url",salary );
let safiwalid=new employee(1003,"safi walid", "administration","mid-senior","url",salary );
let omarzaid=new employee(1004,"omar zaid","development","senior","url",salary);
let ranasaleh=new employee(1005,"rana saleh", "development", "junior","url",salary );
let hadiahmad=new employee(1006, "hadi ahmad","finance", "mid-senior","url",salary );

        

employee.prototype.salary=function()
         { let max ;
            let min ;
        
        if (this.level== "senior" ) {
             max=2000;
            min=1500;
        }
        else if (this.level== "mid-senior") {
            max=1500;
            min=1000 ;

        }
        else if (this.level== "junior")
            {   max=1000;
            min=5000}
        } 
    
        
    let totalsalary=getRndInteger(min,max) ;
    this.salary=totalsalary-totalsalary*0.075

      
        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1) ) + min  

        
        }
    }
      
function rademployee(params) {
    

for (var i = 0000; i < 9999; i++) {
    this.employeeid=i
}
}
let image=document.createElement("img")
image.setAttribute("src", this.image )