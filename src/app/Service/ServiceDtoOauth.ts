export interface ResponseDashboardDTO {
    message: string;
    data?: DataDTO;
    error: null | string;
}
export interface DataDTO {
    clientID: string, createdAt: string,
    scopes:  string[];
    secretKey: string, 
    serviceName: string, 
    updatedAt: string, 
    __v: number,
    _id: string,
}