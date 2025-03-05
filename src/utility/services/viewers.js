import { APIPath } from 'utility/constant'
import { CRUDService } from './crud'

class Viewers extends CRUDService {
    constructor() {
        super(APIPath.viewers) // Initialize CRUDService with Viewerss API path
    }
}

// Initialize the service with the desired API path
const ViewersService = new Viewers(APIPath.viewers)
Object.freeze(ViewersService)

export { ViewersService }
