import { StreamableFile } from "@nestjs/common"

type ConvertResponse = {
  fileName: string;
  file: StreamableFile;
  fileType: string;
}

export default ConvertResponse
