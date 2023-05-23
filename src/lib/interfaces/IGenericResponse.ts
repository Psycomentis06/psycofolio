export interface IGenericResponse {
    type: 'success' | 'error';
    message: string;
    data?: any;
}