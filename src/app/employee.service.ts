import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpClient : HttpClient) { }

  api = "http://localhost:8080"

  public saveEmployee(employee : Employee): Observable<Employee> {
    return this.httpClient.post<Employee>(`${this.api}/save/employee`,employee);
  }

  public getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.api}/get/employee`);
  }

  // public getEmployee(): Observable<Employee[]> {
  //   return this.httpClient.get<Employee[]>(`${this.api}/get/employee/{employeeid}`);
  // }


}
