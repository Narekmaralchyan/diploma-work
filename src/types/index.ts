interface IUniversity {
    name:string;
    imageURL:string;
    id:string;
    founded:string;
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

export type {IUniversity,IFaculty,INews,IComment,IEvents}