import {IFaculty, IStudent, IUniversity} from "../types";

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

async function addFacultyAPI(universityId:string,name:string){

    const newFaculty:IFaculty= {
        name:name,
        id:name,
        news:[],
        events:[],
        chairs:[],
        dean:"",
        degrees:{
            բակալավր:[],
            մագիստրատուրա:[],
        },
        students:[],
        lecturers:[]
    }

    let university = await getUniversityByName(universityId)
    let facultiesNames = university.faculties.map(faculty=>faculty.name)

    if(!facultiesNames.includes(name)){

               const faculties = [...university.faculties,newFaculty]

               await fetch(`http://localhost:3005/universities/${universityId}`, {
                    method: "PATCH",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({faculties:faculties})
                })

                return (newFaculty)
    }
    else throw new Error("համալսարանը արդեն գոյություն ունի")
}

async function editFacultyNameAPI(universityId:string,oldName:string,newName:string){
    let university = await getUniversityByName(universityId)
    let facultiesNames = university.faculties.map(faculty=>faculty.name)
    if(!facultiesNames.includes(newName))
    {
        let faculties = university.faculties
        faculties = faculties.map(faculty => {
            if (faculty.name === oldName) {
                return {
                    ...faculty,
                    name: newName,
                    id: newName
                }
            } else return faculty;
        })
        await fetch(`http://localhost:3005/universities/${universityId}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({faculties:faculties})
        })
    }
    else throw new Error(" տվյալ անունով ֆակուլտետ արդեն գոյություն ունի")
}
async function deleteFacultyAPI(universityId:string,facultyId:string){
    let university = await getUniversityByName(universityId)
    let faculties = university.faculties
    faculties = faculties.filter(faculty=>faculty.id !== facultyId)
    await fetch(`http://localhost:3005/universities/${universityId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({faculties:faculties})
    })
}
async function editUniversityMainInfoAPI(id:string,name:string,info:string,imageURL:string){
    let exist = true
    await fetch(`http://localhost:3005/universities?name=${name}`)
        .then(res=>res.json())
        .then(res=>{
            if(!res.length || res[0].id === id){
                exist = false
            }
        })

    if(exist){
        throw new Error(" տվյալ անունով համալսարան արդեն գոյություն ունի")
    }

    else await fetch(`http://localhost:3005/universities/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name:name,info:info,id:name,imageURL:imageURL})
        })

}
async function getStudentsListAPI(studentsId:string[]){
    let route = ""
    studentsId.forEach((id,index)=>{
        if(index==0){
            route = `id=${id}`
        }
        else route = route + `&id={id}`
    })
    let students = [] as IStudent[];
    await fetch(`http://localhost:3005/users?${route}`)
        .then(res=>res.json())
        .then(res=>{
            students = res;
        })
    return students ;
}

async function loginAPI (email:string,password:string){
    let id = ""
    await fetch(`http://localhost:3005/users?email=${email}`)
        .then(res=>res.json())
        .then(res=>{
            if(!res.length || res[0].password !== password) {
                throw new Error("սխալ էլ-հասցե կամ գաղտնաբառ")
            }
            else {
                id = res[0].id
            }
        })
    return id;
}



export {getUniversityByName,getAllUniversities,addUniversityAPI,addFacultyAPI,editFacultyNameAPI,deleteFacultyAPI,editUniversityMainInfoAPI,getStudentsListAPI,loginAPI}