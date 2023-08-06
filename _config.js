const http =  require("http")
const request = require('request')

const client_id = "4f186e62707e9aea860f"
const client_secret = "a8c2747c7f42a55c3e99375f5561d927fcdc973bf"
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
                        'client_id': 4f186e62707e9aea860f,
                        'client_secret': a8c2747c7f42a55c3e99375f5561d927fcdc973b,
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
