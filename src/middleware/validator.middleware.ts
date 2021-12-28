import { Response, Request, NextFunction } from 'express'

const validateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query.filename && req.query.width && req.query.height) {
    return next()
  } else {
    return res.status(422).json({
      status: 'error',
      error: 'Make Sure to add filename, width and height',
    })
  }
}

export default validateMiddleware
