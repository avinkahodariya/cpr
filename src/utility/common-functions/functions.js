import { FileUploadService } from 'utility/services'

export const processMediaList = async mediaList => {
    if (!mediaList.length) {
        return []
    }
    return Promise.all(
        mediaList?.map(async item => {
            if (typeof item !== 'object') {
                return { keyOrUrl: item }
            }
            if (item.url) {
                return { keyOrUrl: item.url }
            }
            const { signedUrl, keyOrUrl } = await FileUploadService.signedUrl({
                ext: `.${item.name.split('.').pop()}`, // Extract file extension
                contentType: item.type,
                isPublic: true,
            })
            await FileUploadService.media(
                signedUrl,
                item.originFileObj,
                item.type,
            )
            return { signedUrl, keyOrUrl }
        }),
    )
}
