import { NoDriverConverterImplemented } from '../../../errors/errors';

import DriverConverter from '.';
import ConsoleDriver from './console';
import DummyDriver from './dummy';
import PlaywrightDriver from './playwright';

describe('DummyDriver', () => {
  it('should create dummy service', async () => {
    process.env.DRIVER_CONVERTER = 'dummy';

    expect(DriverConverter.getDriver()).toBeInstanceOf(DummyDriver);
  });

  it('should create console service', async () => {
    process.env.DRIVER_CONVERTER = 'console';

    expect(DriverConverter.getDriver()).toBeInstanceOf(ConsoleDriver);
  });

  it('should create playwright service', async () => {
    process.env.DRIVER_CONVERTER = 'playwright';

    expect(DriverConverter.getDriver()).toBeInstanceOf(PlaywrightDriver);
  });

  it('should throw when driver converter is not configured', async () => {
    process.env.DRIVER_CONVERTER = 'invalid_driver';

    expect(
      async () => await DriverConverter.getDriver()
    ).rejects.toThrow(NoDriverConverterImplemented);

    expect(
      async () => await DriverConverter.getDriver()
    ).rejects.toThrow(
      'Can not read driver converter from enviroment variables, '
      + 'please add DRIVER_CONVERTER to .env file'
    );
  });
});
