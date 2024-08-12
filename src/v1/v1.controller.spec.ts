import { Test, TestingModule } from '@nestjs/testing';
import { V1Controller } from './v1.controller';

describe('V1Controller', () => {
  let controller: V1Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [V1Controller],
    }).compile();

    controller = module.get<V1Controller>(V1Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
