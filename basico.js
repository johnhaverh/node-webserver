const http = require('http');

http.createServer((request, response) =>{
    //response.write('Estas conectado');
    //response.writeHead(200,{'Content-type':'text/plain'});
    //response.write('404 - web not found');
    
    // response.writeHead(200,{'Content-type':'application/json'});
    // const persona = {
        //     id: 1,
        //     nombre: 'John'
        // }
        
        // response.write(JSON.stringify(persona));
    response.setHeader('Content-Disposition','attachment; filename=list.cvs');
    response.writeHead(200,{'Content-type':'application/cvs'});
    response.write('id, nombre\n');
    response.write('1, Juan\n');
    response.write('2, John\n');
    response.write('3, Isabella\n');
    response.write('4, Carolina\n');


    response.end();
})
.listen(8080);

console.log('Escuando el puerto',8080);

