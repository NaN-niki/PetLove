module.exports = () => (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://pet-love-ft8x.vercel.app')
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
    // res.setHeader('Access-Control-Allow-Origin', 'https://petlove-98326.web.app/')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'HEAD, OPTIONS, GET, POST, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Authorization')

    next()
}