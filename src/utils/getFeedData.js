import getUserInfo from "./getUserInfo";
import getPosts from "./getPosts";

async function getFeedData (id) {
    const feedData = []
    const {follows} = await getUserInfo(id)
    for(let id of follows) {
        const posts = await getPosts(id)
        feedData.push(...posts)
    }
    return feedData.sort((a,b)=>b.postTime -a.postTime)
}

export default getFeedData