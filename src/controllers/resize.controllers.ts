import sharp from 'sharp'
import { IMAGE_OUTPUT_DIR_PATH, IMAGE_DIR_PATH } from '../constants'
import path from 'path'
const resizeController = async (
  width: number,
  height: number,
  filename: string
): Promise<void> => {
  const originalImagePath = path.join(IMAGE_DIR_PATH, `${filename}.jpg`)
  const outputImagePath = path.join(
    IMAGE_OUTPUT_DIR_PATH,
    `${filename}_${width}_${height}.jpg`
  )
  try {
    await sharp(originalImagePath)
      .resize(Number(width), Number(height))
      .toFile(outputImagePath)
  } catch (error) {
    throw new Error(error as string)
  }
}

export default resizeController
