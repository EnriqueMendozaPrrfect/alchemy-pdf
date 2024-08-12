import { ConvertDto } from "../dto/convert.dto";

export default interface Converter {
  fromHTML: (fileData: ConvertDto) => Promise<Buffer>
}
