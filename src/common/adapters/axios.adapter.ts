import { Injectable } from "@nestjs/common";
import { HttpAdapter } from "../interfaces/http-adapter.interfaces";
import axios from 'axios';

@Injectable()
export class AxiosAdapter implements HttpAdapter{

    private Axios = axios;

    async get<TypeEntry>(url: string): Promise<TypeEntry> {
        try {
            
          const {data}=  await this.Axios.get<TypeEntry>(url);

          return data;

        } catch (error) {
            
            throw new Error('This is an error - Check logs');

        }


    }


}