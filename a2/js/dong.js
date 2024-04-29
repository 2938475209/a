export function dong(arr,divItem,time){

  let zhongFirst = divItem[divItem.length];

  function content(div,c){//检查一个div中是否包含了c类
    let str = div.className;
    let r = new RegExp(`\\b${c}\\b`,'g');
    return r.test(str);
  }
  
  function deleteClass(div,c){//删除div中的c类
    let str = div.className;
    return str.replace(c,'');
  }
  
  function deleteLunKuo() {
    let l = divItem.length;//得到所有div的个数
    for(let i = 0 ; i<l ; i++){
      //检测每个div中是否有xuanzhong类
      if(content(divItem[i],'xuanzhong')){
        //如果有，则删除这个xuanzhong类
        divItem[i].className = deleteClass(divItem[i],'xuanzhong');
      }
    }
  }
  
  
  function f(time){
    
    let t = 200;//每个的时间
    let j = 0;//代表计数
    let i = 0;//divItem的下标
    let k = 0;//表示的定时器执行的次数
    let ds = setInterval(() => {
      i = j%(divItem.length);
      while(divItem[i].flag){//判断是否为灰色，如果是灰色，则进行的操作
        j = j + 1;
        i = j%(divItem.length );
        //将其余的div的轮廓去掉
        deleteLunKuo();
      }
      //不是灰色
      deleteLunKuo();
      divItem[i].className = divItem[i].className + ' ' +'xuanzhong';
      k++;
      j++;
     // console.log(i);
      if(k*t > time){
        divItem[i].flag = true;
        
        divItem[i].getElementsByTagName('img')[0].className +=  ' '+ 'hui';
        
        clearInterval(ds);
      
        document.getElementById('end').style.display = 'block';
        //sconsole.log(arr[i].url);
        document.getElementById('endImag').getElementsByTagName('img')[0].src =  arr[i].url;//divItem[i].getElementsByTagName('img')[0].src;
        //console.log(divItem[i].getElementsByTagName('img')[0].src);
        document.getElementById('endName').innerText = divItem[i].parentNode.lastChild.innerText;
      }
    }, t);
  }
  f(time);
}