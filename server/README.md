# 接口文档

## 目录：
[1、注册](#1注册)<br/>
[2、登陆](#2登陆)<br/>
[3、更新用户信息](#3更新用户信息)<br/>
[4、获取当前的user(根据cookie)](#4获取当前的user(根据cookie))<br/>
[5、获取用户列表](#5获取用户列表)<br/>
[6、获取当前用户的聊天消息列表](#6获取当前用户的聊天消息列表)<br/>
[7、 修改指定消息为已读](#7修改指定消息为已读)<br/>


## 1、注册

### 请求URL：
	localhost:3000/register

### 请求方式：
	POST

### 参数类型

	|参数		|是否必选 |类型     |说明
	|username    |Y       |string   |用户名
	|password    |Y       |string   |密码
	|type        |Y       |string   |类型

## 2、登陆

### 请求URL：
	localhost:3000/login

### 请求方式：
	POST

### 参数类型

	|参数		|是否必选 |类型     |说明
	|username    |Y       |string   |用户名
	|password    |Y       |string   |密码
	
## 3、 上传用户头像
        localhost:3000/upload

## 4、更新用户信息

### 请求URL：
	localhost:3000/update

### 请求方式：
	POST

### 参数类型：

	|参数		|是否必选 |类型     |说明
	|header    |Y       |string   |头像名称
	|info      |N       |string   |介绍
	|post      |N       |string   |职位
	|salary    |N       |string   |月薪
	|company   |N       |string   |公司


## 5、获取当前的user(根据cookie)

### 请求URL：
	localhost:3000/user

### 请求方式：
	GET

### 参数类型

	无

## 6、获取用户列表

### 请求URL：
	localhost:3000/userlist

### 请求方式：
	GET

### 参数类型

	|参数		|是否必选 |类型     |说明
	|type       |Y       |string   |类型(dashen/laoban)


## 7、获取当前用户的聊天消息列表

### 请求URL：
	localhost:3000/msglist

### 请求方式：
	GET

### 参数类型
	无

## 8、 修改指定消息为已读
