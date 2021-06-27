import UserPhoto from '../img/ja.jpg'
import Livia from '../img/teta.jpg'

export const data = {
    user: {
        slug: 'peter-babej',
        fName: 'Peter',
        lName: 'Babej',
        photo: UserPhoto,
        friends: [
            {
                slug: 'livia-mala',
                fName: 'Livia',
                lName: 'Mala',
                photo: Livia,
                work: 'Restaurant',
                school: 'University of Presov'
            },
            {
                slug: 'livia-velka',
                fName: 'Livia',
                lName: 'Velka',
                photo: Livia,
                work: 'Teacher',
                school: 'UPJS'
            },
            {
                slug: 'livia-stredna',
                fName: 'Livia',
                lName: 'Stredna',
                photo: Livia,
                work: 'Economist',
                school: 'Technical University'
            },
        ]
    }
}