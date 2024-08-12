import { chromium } from 'playwright';

import Converter from './converter';
import { ConvertDto } from '../dto/convert.dto';

class PlaywrightDriver implements Converter {
  async fromHTML(fileData: ConvertDto): Promise<Buffer> {
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.setContent(fileData.file)

    return await page.pdf({
      format: fileData.format,
      landscape: fileData.landscape,
      margin: fileData.margin
    });
  }
}

export default PlaywrightDriver;
