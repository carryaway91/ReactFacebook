import UserPhoto from '../img/ja.jpg'
import Livia from '../img/teta.jpg'
import Mountains from '../img/stories/mountains.jpg'
import Lake from '../img/stories/lake.jpg'
import Mlyn from '../img/stories/mlyn.jpg'
import Sakura from '../img/stories/sakura.jpg'

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
                photo: Livia,
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
                photo: Livia,
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
                photo: Livia,
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
                photo: Livia,
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
                photo: Livia,
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
                photo: Livia,
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
                photo: Livia,
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
                photo: Livia,
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
                photo: Livia,
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