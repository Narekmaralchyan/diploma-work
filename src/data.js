//studanet -faculty-bachelor or master
//lecturer -facultets->chairs
//status --student-lecturer-dean-rector-admin

export const universties = [{
    "name": "Երևանի պետական համալսարան",
    "imageURL":"https://www.eduopinions.com/wp-content/uploads/2017/09/Yerevan-State-University-YSU-logo.png",
    "id": "Երևանի պետական համալսարան",
    "founded": "May 16, 1919",
    "faculties": [{
        "name": "Պատմություն",
        "news": [{
            "author": {
                "name": "Նարեկ Մարալչյան", "status": "student", "id": "id1"
            },
            "title": "նորության վերնագիր",
            "text": "նորության տեկստ",
            "img": "https://www.shutterstock.com/image-photo/view-mountain-ararat-yerevan-city-260nw-1450464164.jpg",
            "createDate": 1672158894624,
            "comments": [{
                "authorId": "id1", "authorName": "Նարեկ Մարալչյան", "commentMessage": "նոր մեկնաբանություն"
            }]
        }],
        "events": [{
            "author": {
                "name": "Պողոս Պողոսյան", "status": "lecturer", "id": "iDlecturer1"
            },
            "title": "իրադարձություն վերնագիր ",
            "text": "իրադարձության տեկստ",
            "createDate": 1672158894624,
            "eventDate": 1674417600000
        }],
        "dean": "iDlecturer2",
        "chairs": ["Հայոց պատմության ամբիոն", "Հայաստանի հարակից երկրների պատմության ամբիոն", "Համաշխարհային պատմության ամբիոն", "Հնագիտության և ազգագրության ամբիոն", "Հայ արվեստի պատմության և տեսության ամբիոն", "Մշակութաբանության ամբիոն", "Սփյուռքագիտության ամբիոն"],
        "bachelor": ["Պատմություն", "Արվեստաբանություն", "Մշակութաբանություն", "Կովկասագիտություն", "Հնագիտություն և ազգագրություն"],
        "master": ["Հայոց պատմություն", "Հայաստանի հարակից երկրների պատմություն", "Կովկասագիտություն", "Համաշխարհային պատմություն", "Մշակութաբանություն", "Արվեստաբանություն", "Սփյուռքագիտություն", "Հայագիտություն", "Հնագիտություն և ազգագրություն"],
        "lecturers": ["iDlecturer1", "iDlecturer2"],
        "students": ["id1"]
    }]
}]

export const users = {
    "admin": {
        "id": "admin", "name": "admin", "mail": "admin@mail.ru", "password": "123456", "isAdmin": true
    },
    "iDlecturer1": {
        "status": "lecturer",
        "name": "Պողոս",
        "lastName": "Պողոսյան",
        "avatarURL": "",
        "university": "Երևանի պետական համալսարան",
        "faculty": "Պատմություն",
        "chair": "Հայոց պատմության ամբիոն",
        "id": "iDlecturer1",
        "email": "poghos@mail.ru",
        "password": "123456",
        "phone": "+37494112233",
    },
    "iDlecturer2": {
        "status": "lecturer",
        "name": "Պետրոս",
        "lastName": "Պետրոսյան",
        "avatarURL": "",
        "university": "Երևանի պետական համալսարան",
        "faculty": "Պատմություն",
        "chair": "Հայոց պատմության ամբիոն",
        "id": "iDlecturer2",
        "email": "petros@mail.ru",
        "password": "123456",
        "phone": "+37494112233",
        "isDean": "true"
    },
    "id1": {
        "status": "student",
        "name": "Նարեկ",
        "lastName": "Մարալչյան",
        "degree": "bachelor",
        "id": "id1",
        "admissionYear": 2016,
        "graduationYear": 0,
        "email": "narek@mail.ru",
        "password": "123456",
        "phone": "+37494050644",
        "avatarURL": "",
        "university": "Երևանի պետական համալսարան",
        "faculty": "Պատմություն",
        "state": "active"
    }
}


