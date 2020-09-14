import Tag from '../model/tag'

class TagService {

    async getData(postData) {
        // const data = await Tag.findAll()
        const data = await Tag.findSearch(postData)
        // console.log(data)
        return data
    }
    async create(data) {
        await Tag.create({
            'tagName': '1',
            'uid': '132we23423453532453425'
        })
    }

}
export default TagService