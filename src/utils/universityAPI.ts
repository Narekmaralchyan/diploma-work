import { IUniversity } from "../types";

async function getUniversityByName(name:string){
       const university= await fetch(`http://localhost:3005/universities/${name}`)
            .then(res=>res.json())
        return university as IUniversity
}

async function getAllUniversities(){
    const universities = await  fetch("http://localhost:3005/universities")
        .then(res=>res.json())
    return universities as IUniversity[]
}


export {getUniversityByName,getAllUniversities}