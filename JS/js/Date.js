let now = new Date();// Sat Jun 27 2020 19:15:30 GMT+0800 (中国标准时间)
now.getFullYear();// 年
now.getMonth();// 月
now.getDate();//日
now.getDay();// 周几
now.getHours();// 时
now.getMinutes();// 分
now.getSeconds();// 秒
now.getTime();// 时间戳 全世界统一 1970-1-1 到现在的毫秒数
console.log(new Date(1593256530315));// 时间戳转为时间
now.toLocaleString();// "2020/6/27 下午7:22:44"