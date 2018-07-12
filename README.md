# Math Facebook bot 

This is a chat bot for math calculator on facebook 
## Installation
clone this repo

cd into the directory

run `npm install`


## Configure
config `config.js` file 

```js
var fb_email =  "your_email"
var fb_password = "your_password"
```

## Usage 

### start server :
```
npm start
```

### Features   
```
2+2                  // 4
1+12-60/2            // -17
round 3              // 2.718
atantwo(3, -3)       // 0.75   (ATAN2(3,-3)/math.pi )
log(10000, 10)       // 4
sqrt(-4)             // 2i
```
result : 

![image of docs](/img_doc/bot_pic.PNG)


## Todo
- Add Math.pow
- Add Math.derivative

## Module and API
- [facebook-chat-api](https://github.com/Schmavery/facebook-chat-api)
- [mathjs](https://github.com/josdejong/mathjs)