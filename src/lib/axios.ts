import axios from "axios";

export const metadataApi = axios.create({
  baseURL: "http://localhost:8080", 
});

export const documentApi = axios.create({
  baseURL: "http://localhost:8081", 
});

export const companyApi = axios.create({
  baseURL: "http://localhost:8082", 
});

export const authApi = axios.create({
  baseURL: "http://localhost:9091", 
});

export const apiGateway = axios.create({
  baseURL: "http://localhost:9000",
})