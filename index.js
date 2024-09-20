const  jsonServer=require('json-server')
const mpServer=jsonServer.create()

const middleWare=jsonServer.defaults()


const route=jsonServer.router('db.json')

mpServer.use(middleWare)
mpServer.use(route)
const PORT=3000 || process.env.PORT
mpServer.listen(PORT,()=>{
console.log("server running at :"+PORT)
})