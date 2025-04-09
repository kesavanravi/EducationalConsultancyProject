import axios from "axios";

const SUBSCRIPTION_URL="http://localhost:9696/edu-con/subscription";
const CURRENT_URL="http://localhost:9696/edu-con/subscription-current";
const STUDENT_URL = "http://localhost:9696/edu-con/subscription-stud";
const ID_URL = "http://localhost:9696/edu-con/subscription-id";
const COR_URL = "http://localhost:9696/edu-con/sub-course";

export const saveSubscription = (Subscription) =>{
    return axios.post(SUBSCRIPTION_URL,Subscription);
}

export const updateSubscription = (Subscription) =>{
    return axios.put(SUBSCRIPTION_URL,Subscription);
}

export const getAllSubscriptions = () =>{
    return axios.get(SUBSCRIPTION_URL);
}

export const getSubscriptionById = (id) =>{
    return axios.get(SUBSCRIPTION_URL+'/'+id);
}

export const getAllCurrentSubscriptions = () =>{
    return axios.get(CURRENT_URL);
}

export const getAllSubscriptionsByStudentId = (id) =>{
    return axios.get(STUDENT_URL+"/"+id);
}

export const getAllSubscriptionsByStudent = () =>{
    return axios.get(STUDENT_URL+"/");
}

export const generateSubscriptionId = () =>{
    return axios.get(ID_URL)
}

export const getStatusBySubscriptionId = (id) =>{
    return axios.get(ID_URL+'/'+id)
}

export const getStatusByCourseIdStudentId = (id) =>{
    return axios.get(COR_URL+'/'+id);
}