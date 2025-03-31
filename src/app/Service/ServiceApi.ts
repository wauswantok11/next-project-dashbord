import axios from 'axios';
const BASE_URL = 'https://uat-um.id.th';
const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50X2lkIjoiMjE1MzQ5OTMyNDE2MTc1MDAiLCJhdWQiOiI4YjhkNzRmYy1iMzQwLTQyNzUtOTQ0NC1lNWU1MmFmMTVkOWYiLCJpYXQiOjE3NDE5NjYxMjQsImV4cCI6MTc0MjA1MjUyNH0.jSqM3MlfUSVrvAVz8kWqVX830DGrNHMFMyUcTs2P8jaTmVx_mR5yndiCMeIJPxELI9sKA9Q-107Fxalz6iUf2B8awqYY8NY5fsHvCX_sXC5ulgpZyX9iwulPTY_EtpTRyk13phL3hCrHyo4RR95F7JcfzdxSFxcfmAntgaCq4vfKbwYggbrGvuMmIpL3jmgzZJEqFFHgXtWj4mMx2uMhbVNvNKXOCe1TAVIuSRS5plmfBZg2JzjxrmSsBupFOf-Jrynm-J_3I0iJVSzyDByamLMWkONq2uzf73GRk3FcxGMlxXuLzYqkzRTRP0h1s7rXh2yGASj8NbSw5k9Mu6qNUQ"

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