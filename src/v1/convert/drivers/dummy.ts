import Converter from './converter';
import { ConvertDto } from '../dto/convert.dto';

class DummyDriver implements Converter {
  async fromHTML(fileData: ConvertDto): Promise<Buffer> {
    return Buffer.from('');
  }
}

export default DummyDriver;
