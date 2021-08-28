import createServer from './server/server'

createServer().listen(createServer().get('port'), () => {
    console.log('listening on', createServer().get('port'))
})