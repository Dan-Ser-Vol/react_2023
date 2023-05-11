const carBaseURL = 'http://owu.linkpc.net/carsAPI/v2'
const PlaceBaseURL = ' https://jsonplaceholder.typicode.com'


const users = '/users'
const comments = '/comments'
const cars = '/cars'
const auth = '/auth'

const urls = {
    carsAPI: {
        cars,
        byId: (id: number): string => `${cars}/${id}`
    },
    placeAPI: {
        users,
        comments,
    },
    authAPI: {
        register: users,
        login: auth,
        refresh: `${auth}/refresh`,
        me: `${auth}/me`,
    }
}

export {
    carBaseURL,
    PlaceBaseURL,
    urls
}
