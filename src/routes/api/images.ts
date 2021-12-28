import { Request, Response, Router } from 'express'
import { IMAGE_OUTPUT_DIR_PATH } from '../../constants'
import resizeController from '../../controllers/resize.controllers'
import fs from 'fs'
import validateMiddleware from '../../middleware/validator.middleware'

const routes = Router()

routes.get(
  '/resize',
  validateMiddleware,
  async (req: Request, res: Response) => {
    const filename: string = req.query.filename as string
    const width: number = parseInt(req.query.width as string)
    const height: number = parseInt(req.query.height as string)

    const outputImagePath = `${IMAGE_OUTPUT_DIR_PATH}/${filename}_${width}_${height}.jpg`
    try {
      await fs.existsSync(IMAGE_OUTPUT_DIR_PATH)
      if (!(await fs.existsSync(outputImagePath))) {
        await resizeController(width, height, filename)
      }
      res.status(200).sendFile(outputImagePath)
    } catch (error: unknown) {
      throw new Error(error as string)
    }
  }
)

export default routes
