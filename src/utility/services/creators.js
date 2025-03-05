import { APIPath } from 'utility/constant'
import { CRUDService } from './crud'

class Creators extends CRUDService {
    constructor() {
        super(APIPath.creators) // Initialize CRUDService with Creatorss API path
    }
}

// Initialize the service with the desired API path
const CreatorsService = new Creators(APIPath.creators)
Object.freeze(CreatorsService)

export { CreatorsService }
