fetch("http://172.105.111.190/hello.txt")
.then(e=>e.text())
.then(e=>console.log(e))
.catch(e=>console.log(e));