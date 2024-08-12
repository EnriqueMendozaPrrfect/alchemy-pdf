import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  lives() {
    return 'OK'
  }
}
