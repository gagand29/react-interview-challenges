import { useEffect, useState } from "react";
import { Employee } from "./types/Employee";

const API_URL = "https://67e4e85018194932a583a3cf.mockapi.io/api/v1/employees";

function App(){
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [averageSalary, setAverageSalary] = useState<number>(0);

  useEffect(()=>{
    const fetchEmployees = async()=>{
      const res = await fetch(API_URL);
      const data = await res.json();
      setEmployees(data);

      const total = data.reduce((sum: number, emp: Employee)=> sum+emp.salary, 0);
      setAverageSalary(total / data.length);
    };
    fetchEmployees();
  },[]);

  return (
    

    <div style={{ padding: '20px' }}>
      <h1>Employee Dashboard</h1>
      <p><strong>Average Salary:</strong> ${averageSalary.toFixed(2)}</p>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {employees.map((emp, idx) => (
          <div key={idx} style={{ border: '1px solid #ccc', padding: '10px', width: '200px', borderRadius: '10px' }}>
            <img src={emp.avatar} alt={emp.name} style={{ borderRadius: '50%', width: '100px' }} />
            <h3>{emp.name}</h3>
            <p><strong>Dept:</strong> {emp.department}</p>
            <p><strong>Salary:</strong> ${emp.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
  

}
export default App;