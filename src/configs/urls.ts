const carBaseURL = 'http://owu.linkpc.net/carsAPI/v1'
const PlaceBaseURL = ' https://jsonplaceholder.typicode.com'


const users = '/users'
const comments = '/comments'
const cars = '/cars'

const urls = {
    carsAPI: {
        cars,
        byId: (id: number): string => `${cars}/${id}`
    },
    placeAPI: {
        users,
        comments,
    },
}

export {
    carBaseURL,
    PlaceBaseURL,
    urls
}
