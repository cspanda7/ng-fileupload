import {ContentModel} from 'src/app/content.model'
import {UserModel} from 'src/app/user.model'
import {DetailModel} from 'src/app/detail.model'
export class UploadRequestModel
{
    User:UserModel
    Content:ContentModel
    DocumentDetail:DetailModel
    
    constructor(user: UserModel, content: ContentModel) {
        this.User = user;
        this.Content = content;
      }
}