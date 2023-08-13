import requests
import flask
from flask_cors import CORS

server = flask.Flask(__name__)

# 跨域访问问题
CORS(server, resources=r'/*')

# github auth
client_id = "ba30683739f8fa9d2578"
client_secret = "d2f5d4f6fcb4c6bf21d874ac87a0c4e3b96548fe"


# 接口返回格式 {"access_token":"gho_COSr3lUITUX9b2J7krsKjNlnlNSOBw2g0oZ1","token_type":"bearer","scope":"public_repo"}
@server.post('/get_access_token')
def get_access_token():
    url = 'https://github.com/login/oauth/access_token'
    params = {
        'client_id': client_id,
        'client_secret': client_secret,
        'code': flask.request.json['code']
    }
    headers = {
        'accept': 'application/json'
    }
    result = requests.post(url=url, params=params, headers=headers, verify=False)
    # 存储access_token
    # ..暂时不需要
    return result.json()


if __name__ == '__main__':
    server.run(host='0.0.0.0', port=8011, debug=False)
