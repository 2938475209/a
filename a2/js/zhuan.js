export function zhuan(arr) {//添加项目到转盘中
  let zhuan = document.getElementById('zhuan');//得到转盘
  zhuan.innerHTML = '';
  let  sumIn ;//拿到设定的个数的对象
  sumIn = document.getElementById('sum');
  let sum = 0;//拿到设置的个数
  let len = arr.length;//拿到项目的个数

  function f(){
    for(let i = 0; i <arr.length ; i++){
      let div = document.createElement('div');//创建转盘的项目
          let first = document.createElement('div');//为转盘的项目创建第一个div，用于放头像
          let second = document.createElement('div');//为转盘的项目创建第二个div，用于放名字

          //div.flag = false;//div的状态
          div.index = i;//div的索引
          div.appendChild(first);//把转盘项目的第一个div添加进去
          div.appendChild(second);//把转盘项目的第二个div添加进去
          
          div.className = 'inItem';//给转盘项目设置css
          first.className = 'first';
          second.className = 'second';
          first.flag = false;//图片div的状态
          //为每个奖项放入对应的图片和名称
          let url = arr[i].url;
          let name = arr[i].name;
          first.innerHTML = '<img src=' + url + '>';
          second.innerHTML = name;
          zhuan.appendChild(div);


          function deleteClass(div,c){//删除div中的c类
            let str = div.className;
            return str.replace(c,'');
          }
          //给div添加点击事件
          div.onclick = function() {
           if(div.firstChild.flag === false){//没被中奖 => 中奖 => 变灰
            div.firstChild.firstChild.className += ' ' + 'hui';
            div.firstChild.flag = true;
            return;
           }
           if(div.firstChild.flag === true){//中奖 => 不中奖 => 不变灰
            div.firstChild.firstChild.className = deleteClass(div.firstChild.firstChild,'hui');
            div.firstChild.flag = false;
            return;
           } 
          }
    }

    divItem = zhuan.querySelectorAll('.first');
  }

  sumIn.onchange = function() {
    sum = sumIn.value;
    if(sum > arr.length){
      zhuan.innerHTML = '';
      let i = 0;
      while(arr.length < sum){
        arr.push(arr[i%len]);
        i++;
      }
      
    }

    sum = sumIn.value;
    if(sum < arr.length){
      zhuan.innerHTML = '';
      let i = 0;
      while(arr.length > sum){
        arr.pop();
      }
    }
    f();   
  }
  f();
  
}
export let divItem;