import home1 from '../../assets/images/home1.jpg'
import home2 from '../../assets/images/home2.jpg'
import home3 from '../../assets/images/home3.jpg'
import home4 from '../../assets/images/home4.jpg'
import home5 from '../../assets/images/home5.jpg'

//IMAGES BIG WORD BECAUSE WE HAVE CONSTANTS OBJECTS INSIDE ARRAY
// add Object.freeze 
export const Images = [
    {
        id: 1,
        title: 'Monty Python - Białystok',
        img: home1,
        label: 'Modern',
        path: '/MPB'
    },
    {
        id: 2,
        title: "Marilyn Monroe - Białystok",
        img: home2,
        label: 'Villa',
        path: '/MMB'
    }, 
    {       
        id: 3,
        title: 'Queens Gambit  - Kleosin',
        img: home3,
        label: 'Classic',
        path: '/QGK'
    },
    {
    
        id: 4,
        title: "Charle Chaplin - Białystok",
        img: home4,
        label: 'Oldschool',
        path: '/CCB'
    },
    {
        id: 5,
        title: "Janosik - Białystok",
        img: home5,
        label: 'Regional',
        path: '/JB'
    }
];