/* 
EasyHTTP Library for making http requests 
*/

class EasyHTTP{
    
    //HTTP GET request
    async get(url){
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
        
    }
    
    //HTTP POST request
    async post(url , data){
        
        const response = await fetch(url , {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
        
    }
    
    //HTTP PUT request
    async put(url , data){
        
        const response = await fetch(url , {
            method:"PUT",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
        
    }
    
    //HTTP delete request
    
    async delete(url){
        
        const response = await fetch(url , {
            method:"DELETE"
        });
        
        const resData = await "Resource Deleted";
        return resData;
    }
}