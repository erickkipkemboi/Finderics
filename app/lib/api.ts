
import axiosInstance from '../lib/axios'; 


export const fetchUsers = async () => {
  const res = await axiosInstance.get('api/users');
  return res.data;

};

