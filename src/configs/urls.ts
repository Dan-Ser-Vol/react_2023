
const PlaceBaseURL = ' https://jsonplaceholder.typicode.com'

const todos = '/todos'
const comments = '/comments'
const albums = '/albums'
const posts = '/posts'

const urls = {
    placeAPI: {
        todos,
        albums,
        comments,
        posts,
        getPostById: (postId: string | undefined): string => `${posts}/${postId}`
    },
}

export {
    PlaceBaseURL,
    urls
}