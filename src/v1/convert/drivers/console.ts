import Converter from './converter';
import { ConvertDto } from '../dto/convert.dto';

class ConsoleDriver implements Converter {
  async fromHTML(fileData: ConvertDto): Promise<Buffer> {
    console.log(fileData.file)

    return Buffer.from('');
  }
}

export default ConsoleDriver;
