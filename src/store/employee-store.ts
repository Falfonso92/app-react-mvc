import { createSlice, PayloadAction, Slice, CaseReducerActions, SliceCaseReducers, AnyAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from './store';
import { IEmployee, Employee } from '../models/employee';
import { EmployeesService } from '../services/employees';
import { Reducer } from 'react';


export interface EmployeeState{
    employee: IEmployee;
    employees: Array<IEmployee>;
}

export interface IEmployeeStoreActions{
    addEmployee: Function;
    deleteEmployee: Function;
    editEmployee: Function;
    getEmployee: Function;
    getEmployees: Function;
}

class EmployeeStore {
    reducer:Reducer<any,AnyAction>;
    service: EmployeesService;
    initialState: EmployeeState;
    slice: Slice;
    actions: CaseReducerActions<SliceCaseReducers<IEmployeeStoreActions>>;

    selectEmployee:any;
    selectEmployees:any;
    constructor(){
        this.service = new EmployeesService();
        this.initialState = {
            employee: new Employee(),
            employees: new Array<IEmployee>()
        };
        this.slice = createSlice({
            name: 'employee',
            initialState: this.initialState,
            reducers:{
                getEmployee: (state, action:PayloadAction<IEmployee>) => {
                    state.employee = action.payload;
                },
                getEmployees: (state: EmployeeState, action:PayloadAction<Array<IEmployee>>) => {
                    state.employees = action.payload;
                }
            }
        });
        this.actions = this.slice.actions;
        this.reducer = this.slice.reducer;
        this.selectEmployee = (state: RootState) => state.employeeReducer.employee;
        this.selectEmployees = (state: RootState) => state.employeeReducer.employees;

        
    }
    public static getActions = ()=>{
        
    }
    public addEmployee = (employee: IEmployee): AppThunk => dispatch => {
        this.service.add(employee)
        .then((employee: IEmployee) => dispatch(this.getEmployees()))
        .catch(err => console.log(err));
    }

    public deleteEmployee = (employee: IEmployee): AppThunk => dispatch => {
        this.service.delete(employee.id)
        .then((employee: IEmployee) => dispatch(this.getEmployees()))
        .catch(err => console.log(err));
    }
    public editEmployee = (employee: IEmployee): AppThunk => dispatch => {
        this.service.update(employee.id, employee)
        .then(() => dispatch(this.getEmployees()))
        .catch(err => console.log(err));
    }

    public getEmployee = (id: number): AppThunk => dispatch => {
        this.service.get(id)
        .then((employee: IEmployee) => dispatch(this.actions.getEmployee(employee)))
        .catch(err => console.log(err));
    }

    public getEmployees = (): AppThunk => dispatch => {
        this.service.getAll()
        .then((employees: Array<IEmployee>) => dispatch(this.actions.getEmployees(employees)))
        .catch(err => console.log(err));
    }
}

export const employeeStore = new EmployeeStore();