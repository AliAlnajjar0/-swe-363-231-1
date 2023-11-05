//BE exr 2
const http = require("http")
const port = 2
const fs = require("fs")

const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile("[html_1-exercise_1]/main.html", function(error, data){
        if(error){
            res.writeHead(404)
            res.write("Error: File not Found")
        } else {
             res.write(data)
        }
        res.end()
    })
    
    
})

server.listen(port, function(error){

    if(error){
        console.log("Error", error)

    } else{

        console.log("It is working!!  "+port)
    }
})