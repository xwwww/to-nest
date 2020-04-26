import { PipeTransform, Injectable, BadRequestException, ArgumentMetadata } from '@nestjs/common';
import { ObjectID } from 'mongodb';

@Injectable()
export class ParseObjectIdPipe implements PipeTransform<any, ObjectID> {
  transform(value: any, metadata: ArgumentMetadata): ObjectID {
    console.log(value, metadata, ObjectID.isValid(value))
    const validObjectId: boolean = ObjectID.isValid(value);

    if (validObjectId) {
      throw new BadRequestException('Invalid ObjectId');
    }

    const objectId: ObjectID = ObjectID.createFromHexString(value);
    return objectId
  }
}