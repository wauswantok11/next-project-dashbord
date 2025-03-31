import axios from 'axios';
const BASE_URL = 'https://uat-um.id.th';
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjcwODI5NzgxNDQ1NjM3MSIsImF1ZCI6IjhiOGQ3NGZjLWIzNDAtNDI3NS05NDQ0LWU1ZTUyYWYxNWQ5ZiIsImlhdCI6MTc0MjQ0NjQ0MiwiZXhwIjoxNzQyNTMyODQyfQ.oFpsM_gfPzJZo8iL_BOlrpOZ3jF0Wg90ZFVJvdflMQ4WwCAMiseHddqXJTD9VDOO-f7dNoUI0k84YSyg2xgnvWNeAO7b-kkc3e0G86eEUwYyfwYioot5lUukjx6nhgDOxya7OPjZQRN07rcD7aC7jUKV5k5wJhwT4EXq2OHWQbpY7bZ4Mlat5yp4AWQamLC7pqq8Rl6XG1mNRZV6ixOqdNhEYiHr-WQxibr7VuTQsw165FPZReNUZalJeTKzdsfqifg4Gl2xrkED4cuDZMwsQFgcTOcosa6qgk3ckjkpXglZjigLIYEox0NetgvP8PYmSr0DTz1XY-tOCSztFxBAGw"

export const getBusinesses = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/admin/businesses`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching api getBusinesses:', error);
        throw error;
    }
};
 
export const getAdminDashboard = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/admin/dashboard`, {
            headers: {
                'Authorization': 'Bearer '+ token
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching api getAdminDashboard:', error);
        throw error;
    }
};  

export const getOauth = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/v1/admin/oauth`, {
            headers: {
                'Authorization': 'Bearer '+ token
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching api getAdminDashboard:', error);
        throw error;
    }
};  
