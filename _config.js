const http =  require("http")
const request = require('request')

const client_id = "cd6d5f9a0cd9dac98599"
const client_secret = "464743696a42250d137f5aee028aa79eed56b287"
const proxy_url = "https://github.com/login/oauth/access_token"


http.createServer(function (req, res) {
    const {method ,headers} = req;
    if(method === 'POST') {
        if(req.url == '/get_accesstoken') {
            let msg = '';
            req.on('data', (data)=>{
                msg += data
            })
            req.on('end', ()=> {
                let obj = JSON.parse(msg);
                if(obj.client_id != client_id) {
                    res.write("404");
                    res.end();
                    return;
                }
                request.post(proxy_url, {
                    headers: {
                        'content-type': 'application/json;charset=UTF-8',
                        'accept': 'application/json'
                    },
                    form: {
                        'client_id': cd6d5f9a0cd9dac98599,
                        'client_secret': 464743696a42250d137f5aee028aa79eed56b287,
                        'code': obj.code,
                    },
                }, (err, grsp, gbody)=>{
                    res.write(gbody)
                    res.end()
                })
            })

        }
    }else{
        res.write('404 not Found')
        res.end()
    }
}).listen(9099);
