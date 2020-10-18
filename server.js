const express = require('express')
const request = require('request')
const path = require('path')
const fs = require('fs')
const {Router} = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'build')))

function load(url) {
    return new Promise((resolve, reject) => {
        request(url, (error, response, body) => {
            if (error) reject(error)
            if (response.statusCode !== 200) {
                reject('Invalid status code <' + response.statusCode + '>')
            }
            resolve(JSON.parse(body))
        })
    })
}

const openWeatherMapRouter = Router()
openWeatherMapRouter.get('*', async (req, res) => {
    try {
        const {lat, lon} = req.query
        const openWeatherApiUrl =
            'http://api.openweathermap.org/data/2.5/onecall' +
            `?appid=${process.env.API_KEY}&exclude=current,minutely,hourly` +
            `&lat=${lat}&lon=${lon}`
        const data = await load(openWeatherApiUrl)
        res.status(200).json(data)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Internal server error'}).end()
    }
})

app.use('/api', openWeatherMapRouter)

app.get('*', function (req, res) {
    const fileUrlPath = req.path.toString().substring(1).split('/')
    const filePath = path.join.apply(null, [__dirname, 'dist', ...fileUrlPath])
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath)
    }
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const PORT = process.env.NODE_PORT || 9000
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}...`)
})
