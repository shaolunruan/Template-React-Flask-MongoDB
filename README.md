# QCVIS

> updated on Jan. 17, 2022

### Introduction
This is a template with `React` + `Flask` + `MongoDB` for instant build of a VA system


### How to use it?

**Client**:
1. 安装client依赖 `cd client | npm install`
2. 启动client `npm start`

**Server**:
1. 创建虚拟环境 + 激活 `mkvirtualenv ENV_NAME` + `workon ENV_NAME`
2. 根据`requirements`安装依赖包 `pip install -r requirements.txt`
3. 启动项目 `cd server | python app.py`

> 如果 `React` 控制台可以 `console.log` 出 `hello`, 说明前后台可以正常通信

或者

> `React` 可以通过`axios` 从 `http://localhost:3000/api/add_one` 取到后端 `Flask` 接口`http://localhost:5000/add_one`提供的数据，那么说明前后台可以正常通信


**MongoDB**:

1. 创建db 通过 `Robo 3T`直接创建

