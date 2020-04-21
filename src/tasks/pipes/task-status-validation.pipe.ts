import { PipeTransform, ArgumentMetadata, BadRequestException } from "@nestjs/common";
import { TaskStatus } from "../task-status.enum";

export class TaskStatusValidationPipe implements PipeTransform {
  readonly allowStatus = [
    TaskStatus.OPEN,
    TaskStatus.IN_PROGRESS,
    TaskStatus.DONE
  ]

  transform(value: any, metadata: ArgumentMetadata) {
    console.log(value, metadata)
    value = value.toUpperCase()
    if (!this.isStatusValue(value)) {
      throw new BadRequestException(`${value}无效`)
    }
    return value
  }

  private isStatusValue(status: any) {
    const idx = this.allowStatus.indexOf(status)
    console.log(idx)
    return idx !== -1
  }
}