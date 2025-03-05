import { APIPath } from 'utility/constant'
import { CRUDService } from './crud'
import { CommonUtility } from 'utility/common'
import { BaseService } from './base'

class Competition extends CRUDService {
  constructor() {
    super(APIPath.competitions) // Initialize CRUDService with competitions API path
  }

  get(params) {
    const url = `${APIPath.adminCompetitions}?${CommonUtility.objectToParams(
      params,
    )}`
    return BaseService.get(url)
  }
}

// Initialize the service with the desired API path
const CompetitionService = new Competition(APIPath.competitions)
Object.freeze(CompetitionService)

export { CompetitionService }
