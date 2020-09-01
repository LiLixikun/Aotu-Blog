import Tag from '../model/tag'

class TagService {

    async getData() {
        const data = await Tag.findAll()
        return data
    }

}
export default TagService