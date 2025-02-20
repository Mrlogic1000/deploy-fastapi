
import axios from "axios"

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJoYWNrIiwiaWQiOjEsImV4cCI6MTcyOTk5Njg2NH0.m7CqRpMIb-_lw1a6pd3Wwl5UNegqUrgiDH1VMSR5UgA'

const api = axios.create({
    baseURL:'http://localhost:8000',  
    // headers: {Authorization:  token}
     
    
})

function getUrl(params=''){
    re
}
const user = {
    username:'hack',
    password:'12345678'
}
const formData = new FormData()


formData.append('username','hack')
// formData.append('email','hack@email.com')
formData.append('password','12345678')






async function getProfile() {
    try {
        const response = await api.get(`/profile?token=${token}`)        
        console.log(response.data)
        
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
} 



export async function userLogin() {
    try {
        const response = await api.post("/token", formData)        
        console.log(response.data)
        
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
} 


export async function getDevices() {
    try {
        const response = await api.get("/devices")        
        return response.data
        
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
} 

export async function getDevice(id) {
    try {
        const response = await api.get(`/devices/${id}`) 
            
        return response.data
        
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
} 


export async function postDevice(data) {
    try {
        const response = await api.post("/devices", data)
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
    
}
export async function updateDevice(id,data) {
    try {
        const response = await api.put(`/devices/${id}`, data)
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
    
}
export async function deleteDevice(data) {
    try {
        const response = await api.delete(`/devices/${data}`)       
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
    
}


export async function getNetwork(id) {
    try {
        const response = await api.get(`/network/${id}`) 
            
        return response.data
        
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
} 



// getDevice(3)




export async function getrooms() {
    try {
        const response = await api.get("/rooms")        
        return response.data
        
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
} 

export async function getRoom(id) {
    try {
        const response = await api.get(`/room/${id}`) 
            
        return response.data
        
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
} 


export async function postRoom(data) {
    try {
        const response = await api.post("/room", data)
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
    
}
export async function updateRoom(id,data) {
    try {
        const response = await api.put(`/room/${id}`, data)
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
    
}
export async function deleteRoom(data) {
    try {
        const response = await api.delete(`/room/${data}`)       
        
    } catch (error) {
        console.log(`errors: ${error}`)
    }
    
}