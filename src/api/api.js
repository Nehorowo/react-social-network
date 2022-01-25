import * as axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': 'f3b49042-67cf-4fd1-86ed-11c24a7c438d',
  },
});

export const usersAPI = {
  getUsers(currentPage, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`, {
        withCredentials: true,
      })
      .then((response) => response.data);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getUserProfile(userId) {
    console.warn('Obsolete method. Please use profileAPI object');
    return profileAPI.getUserProfile(userId);
  },
};

export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/${userId}`);
  },
  getStatus(userId) {
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    return instance.put(`profile/status/`, { status: status });
  },
  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file);
    return instance.put(`profile/photo/`, formData);
  },
  saveProfile(profile) {
    return instance.put(`profile`, profile);
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout() {
    return instance.delete(`auth/login`);
  },
};
