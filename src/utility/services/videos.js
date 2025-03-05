import { APIPath } from 'utility/constant'
import { CRUDService } from './crud'

class Videos extends CRUDService {
    constructor() {
        super(APIPath.videos) // Initialize CRUDService with Videoss API path
    }
}

// Initialize the service with the desired API path
const VideosService = new Videos(APIPath.videos)
Object.freeze(VideosService)

export { VideosService }
