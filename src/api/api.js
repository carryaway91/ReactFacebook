import UserPhoto from '../img/ja.jpg'
import Livia from '../img/teta.jpg'
import Teta from '../img/baba.jpg'
import Mountains from '../img/stories/mountains.jpg'
import Lake from '../img/stories/lake.jpg'
import Mlyn from '../img/stories/mlyn.jpg'
import Sakura from '../img/stories/sakura.jpg'
import woman0 from '../img/0.jpg'
import woman1 from '../img/1.jpg'
import woman2 from '../img/2.jpeg'
import woman3 from '../img/3.png'
import woman4 from '../img/4.jpg'
import woman5 from '../img/5.jpg'
import woman6 from '../img/6.jpg'
import woman7 from '../img/7.jpg'
import woman8 from '../img/8.jpg'

export const data = {
    user: {
        slug: 'peter-babej',
        fName: 'Peter',
        lName: 'Babej',
        photo: UserPhoto,
        posts: [{
            id: 1,
            text: 'This is my first post as Peter Babej',
            photo: '',
        }],
        work: 'Wannabe Web Developer',
        school: 'Prekladatelstvo a Tlmocnictvo at Presovska Univerzita v Presove',
        from: 'Presov',
        friends: [
            {
                slug: 'livia-mala',
                fName: 'Livia',
                lName: 'Mala',
                photo: woman0,
                work: 'Restaurant',
                school: 'University of Presov',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Mala',
                    photo: '',
                }],
                friends: [],
                story: {
                    id: 1,
                    story: Mountains
                }
            },
            {
                slug: 'aneta-nova',
                fName: 'Aneta',
                lName: 'Nova',
                photo: woman1,
                work: 'Predavacka',
                school: 'Stredna priemyselna',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Velka',
                    photo: '',
                }],
                friends: [],
                story: {id: 2, story: Sakura}

            },
            {
                slug: 'anna-zahunanska',
                fName: 'Anna',
                lName: 'Zahunanska',
                photo: woman2,
                work: 'Nurse',
                school: 'UKF Nitra',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Stredna',
                    photo: '',
                }],
                friends: [],
                story: {id: 45, story: Mlyn}
            },
            {
                slug: 'katka-anrejska',
                fName: 'Katka',
                lName: 'Andrejska',
                photo: woman3,
                work: 'Hosteska',
                school: 'Technical University',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Stredna',
                    photo: '',
                }],
                friends: [],
                story: {id: 3, story: Lake}
            },
            {
                slug: 'lucia-malackova',
                fName: 'Lucia',
                lName: 'Malackova',
                photo: woman4,
                work: 'Economist',
                school: 'Technical University',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Stredna',
                    photo: '',
                }],
                friends: []
            },
            {
                slug: 'sona-zavodna',
                fName: 'Zavodna',
                lName: 'Stredna',
                photo: woman5,
                work: 'English Teacher',
                school: 'UPJS',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Stredna',
                    photo: '',
                }],
                friends: []
            },
            {
                slug: 'beata-bohusova',
                fName: 'Beata',
                lName: 'Bohusova',
                photo: woman6,
                work: 'Translator',
                school: 'University of Presov',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Stredna',
                    photo: '',
                }],
                friends: []
            },
            {
                slug: 'theresia-hodasova',
                fName: 'Theresia',
                lName: 'Hodasova',
                photo: woman7,
                work: 'Nurse',
                school: 'UPJS',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Stredna',
                    photo: '',
                }],
                friends: []
            },
            {
                slug: 'maria-zakutna',
                fName: 'Maria',
                lName: 'Zakutna',
                photo: woman8,
                work: 'Zverolekarka',
                school: 'Veterinarna Vysoka Skola v Kosiciach',
                from: 'Vienna, Austria',
                posts: [{
                    id: 1,
                    text: 'This is my first post as Livia Stredna',
                    photo: '',
                }],
                friends: []
            },
        ]
    }
}