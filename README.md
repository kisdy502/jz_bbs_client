# jz_bbs_client

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### deps
```
npm install  --legacy-peer-deps  element-plus --save
npm install --legacy-peer-deps vue-router --save
npm install vuex --save
npm install axios --save
npm install path --save
npm install js-cookie --save


####
实现需求
 登录，Token UserName
 登录失败，转到登录界面，清空token和相关信息
 获取用户的角色和可以访问的菜单
 登录后自动跳转到Home页面
 动态菜单控制，根据用户的角色可以访问的菜单




