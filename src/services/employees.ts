import axios, { AxiosInstance } from 'axios';
import { String } from 'typescript-string-operations';

export class EmployeesService {
    private _client: AxiosInstance;
    constructor(){
        this._client = axios.create({
            baseURL: "https://labsserviceemployee.azurewebsites.net/employees"
        });
    }

    public async getAll(){
        const response = await this._client.get("");
        return response.data;
    }

    public async get(id: number){
        const response = await this._client.get(`${id}`);
        return response.data;
    }
    public async delete(id: number){
        const response = await this._client.delete(`${id}`);
        return response.data;
    }
    public async update(id: number, employee: any){
        const response = await this._client.put(`${id}`, employee);
        return response.data;
    }
    public async add(employee: any){
        const response = await this._client.post(String.Empty, employee);
        return response.data;
    }
}