interface IUniversity {
    name:string;
    imageURL:string;
    id:string;
    info:string;
    faculties:IFaculty[]
}
interface IFaculty{
    name:string;
    id:string;
    news:INews[];
    events:IEvents[];
    dean:string;
    chairs:string[],
    degrees:{
        "բակալավր":string[],
        "մագիստրատուրա":string[]
    }
    lecturers:string[];
    students:string[];
}
interface INews{
    "author":{
        name:string;
        id:string;
        status:string;
    }
    title:string;
    text:string
    img:string;
    createDate:number;
    comments:IComment[];
}
interface IComment{
    authorId:string;
    authorName:string;
    commentMessage:string;
}
interface IEvents{
    "author":{
        name:string;
        id:string;
        status:string;
    }
    title:string;
    text:string
    createDate:number;
    eventDate:number;
}

interface IStudent {
    status:string;
    name:string;
    lastName:string;
    degree:string;
    department:string;
    id:string;
    course:string;
    email:string;
    password:string;
    phone:string;
    avatarURL:string;
    university:string;
    faculty:string;
}

export type {IUniversity,IFaculty,INews,IComment,IEvents,IStudent}