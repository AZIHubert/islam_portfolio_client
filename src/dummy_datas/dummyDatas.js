export const DUMMY_TYPES = [
    {
        _id: 0,
        title: 'type 1'
    },
    {
        _id: 1,
        title: 'type 2'
    },
    {
        _id: 2,
        title: 'type 3'
    },
    {
        _id: 3,
        title: 'type 4'
    }
]

export const DUMMY_WORKS = [
    {
        _id: 0,
        title: 'work 1',
        index: 0,
        type: 0,
        thumbnailURL: 'https://dummyimage.com/400x600/000/fff&text=work+1',
        highlight: {
            active: true,
            index: 3
        }
    },
    {
        _id: 1,
        title: 'work 2',
        index: 1,
        type: 0,
        thumbnailURL: 'https://dummyimage.com/400x600/000/fff&text=work+2',
        highlight: {
            active: false,
            index: 0
        }
    },
    {
        _id: 2,
        title: 'work 3',
        index: 2,
        type: 1,
        thumbnailURL: 'https://dummyimage.com/400x600/000/fff&text=work+3',
        highlight: {
            active: true,
            index: 0
        }
    },
    {
        _id: 3,
        title: 'work 4',
        index: 3,
        type: 1,
        thumbnailURL: 'https://dummyimage.com/400x600/000/fff&text=work+4',
        highlight: {
            active: false,
            index: 0
        }
    },
    {
        _id: 4,
        title: 'work 5',
        index: 4,
        type: 2,
        thumbnailURL: 'https://dummyimage.com/400x600/000/fff&text=work+5',
        highlight: {
            active: true,
            index: 1
        }
    },
    {
        _id: 5,
        title: 'work 6',
        index: 5,
        type: 2,
        thumbnailURL: 'https://dummyimage.com/400x600/000/fff&text=work+6',
        highlight: {
            active: false,
            index: 0
        }
    },
    {
        _id: 6,
        title: 'work 7',
        index: 6,
        type: 3,
        thumbnailURL: 'https://dummyimage.com/400x600/000/fff&text=work+7',
        highlight: {
            active: false,
            index: 0
        }
    },
    {
        _id: 7,
        title: 'work 8',
        index: 7,
        type: 3,
        thumbnailURL: 'https://dummyimage.com/400x600/000/fff&text=work+8',
        highlight: {
            active: true,
            index: 2
        }
    },
];

export const DUMMY_GENERAL = {
    latestProjectsNum: 4,
    email: 'user@emai.com',
    phone: '555-1234-4321',
    instagram: {
        active: true,
        link: 'user.user'
    },
    linkedin: {
        active: true,
        link: 'user.user'
    },
    pinterest: {
        active: true,
        link: 'https://www.pinterest.fr/'
    },
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis volutpat.'
}