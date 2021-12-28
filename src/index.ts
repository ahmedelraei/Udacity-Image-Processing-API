import express, { Application } from 'express'
import path from 'path'
import morgan from 'morgan'
import helmet from 'helmet'
import routes from './routes'
import * as dotenv from 'dotenv'

dotenv.config()
const PORT = process.env.PORT || 3000

const app: Application = express()
app.use('/images', express.static(path.join(__dirname, 'images')))
app.set('views', path.resolve(__dirname, 'views'))
app.use(morgan('short'))
app.use(helmet())
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`)
})
export default app
