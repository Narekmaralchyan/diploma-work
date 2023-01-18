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

 async function addUniversityAPI(university:IUniversity){
    // return getAllUniversities()
    //     .then(universities=>{
    //          const exist = universities.map(university=>university.name).includes(university.name);
    //          if(!exist) {
    //              fetch("http://localhost:3005/universities", {
    //                  method: "POST",
    //                  headers: {
    //                      'Content-Type': 'application/json',
    //                  },
    //                  body: JSON.stringify(university)
    //              })
    //          }
    //     })
     const universities = await getAllUniversities()
     if(universities.map(university=>university.name).includes(university.name)){
         throw new Error("համալսարանը արդեն գոյություն ունի")
     }
     else {
         fetch("http://localhost:3005/universities", {
             method: "POST",
             headers: {
                 'Content-Type': 'application/json',
             },
             body: JSON.stringify(university)
         })
     }

}

export {getUniversityByName,getAllUniversities,addUniversityAPI}