//変数
let unko = "Hello World";

//unko = "Hello World2!!"//

//定数
const bigUnko = "He..Hell...Hellp World"

//配列//
const inoki = ['いーち','にー','さーん','ダーー!!']

//ループ文
//let index = 0;
//while(index < inoki.length){
    //繰り返したい命令
 //   console.log(inoki[index]);
  //  index++;
//}

//if/else
//if(inoki.length > 5){
 //   console.log('ボンバイエ!');
//} else {
//console.log('ボンバ。！')
//}



//関数
const test = (arg) => {
    //ここに実行したい命令を書く
    if(inoki.length > arg){
        console.log('ボンバイエ!');
    } else {
     console.log('ボンバ。！')
    }
};

//オブジェクト
const unko2 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint'
};
document.getElementsByTagName('button')[0].addEventListener('click',()=> {window.alert('Hello world');});

