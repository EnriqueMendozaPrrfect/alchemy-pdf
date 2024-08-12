import { NoDriverConverterImplemented } from '../../../errors/errors';

import ConsoleDriver from './console';
import Converter from './converter';
import DummyDriver from './dummy';
import PlaywrightDriver from './playwright';

class DriverConverter {
  static getDriver(): Converter {
    switch (process.env.DRIVER_CONVERTER) {
      case 'playwright':
        return new PlaywrightDriver();
      case 'dummy':
        return new DummyDriver();
      case 'console':
        return new ConsoleDriver();
      default:
        throw new NoDriverConverterImplemented();
    }
  }
}

export default DriverConverter;
