import { Injectable } from '@nestjs/common';
import { LoggerPkg } from '../../../pkg/logger/logger.pkg';

@Injectable()
export class UserService {
  constructor(private logger: LoggerPkg) {
    this.logger = logger;
  }
}
