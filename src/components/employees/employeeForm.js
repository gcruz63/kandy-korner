import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    const [location, setLocations] = useState([])
    const [employee, updateEmployee] = useState({
        name: "",
        manager: false,
        fullTime: false,
        location: "",
        hourlyRate: ""
    });
    const history = useHistory()
    useEffect(
        ()=>{
            fetch("http://localhost:8088/locations")
            .then(res=> res.json())
            .then(
                (locationsArray) => {
                setLocations(locationsArray)
            })
        },
        []
    )
    const submitEmployee = (evt) => {
        evt.preventDefault()
        
        const newEmployee = {
            name: employee.name,
            manager: employee.manager,
            employeeId: parseInt(localStorage.getItem("honey_customer")),
            fullTime: employee.fullTime,
            locationId: "",
            hourlyRate: ""
        }
    
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
            .then(() => {
                history.push("/employees")
            })
            .then(() => {

            }) 

    }

    

    return (
        <form className="employeeForm">
            <h2 className="employeeForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Location</label>
                    <select
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.location = evt.target.value
                                updateEmployee(copy)
                            }
                         }>
                             <option value="0">Choose</option>
                            {location.map(
                                (location) => {
                                    return <option key={`location==${location.id}`} value={location.id}>{location.region}</option>
                                }
                            )}
                         </select>
                        
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Name"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.name = evt.target.value
                                updateEmployee(copy)
                            }
                        } 
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="hourlyRate">Hourly Rate:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Hourly pay"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.hourlyRate= evt.target.value
                                updateEmployee(copy)
                            }
                         }
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="manager">Manager:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.manager = evt.target.checked
                                updateEmployee(copy)
                            }
                         }
                        />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="fullTime">full time:</label>
                    <input type="checkbox"
                        onChange={
                            (evt) => {
                                const copy = {...employee}
                                copy.fullTime = evt.target.checked
                                updateEmployee(copy)
                            }
                         }
                        />
                </div>
            </fieldset>
            <button className="btn btn-primary" onClick={submitEmployee}>
                Submit Employee
            </button>
        </form>
    )
}