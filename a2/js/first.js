let ff = 10;
window.onclick = function() {
  
  let Padd = import('./add.js');
  let arr = [];//显示出来的所有数据
  Padd.then((res) => arr = res.list);//奖项的数组
  let dong = import('./dong.js');
  //开始按钮
  let start = document.getElementById('start');
  
  let add = document.getElementById('add');
  add.onclick = function() {//添加的时候，展开添加区域
    let div = document.querySelectorAll('.add')[0];
    div.style.display = 'inline';
    Padd.then((res) => {res.add();});
  }

  let itemImage = [];//头像的数组
  let aa = import('./zhuan.js');
  aa.then(res => {
    itemImage = res.divItem;
  })

  
  
  start.onclick = function() {//点击开始按钮的事件
    
    if(ff === 10){
    
      
      ff = ff + 10;
      //console.log(ff);
      let p = import('./db.js');
      p.then(res => {
        for(let i = 0 ;i<arr.length;i++){
          res.f(arr[i]);
        }
        f = false;
      });
    }
    
    let time = document.getElementById('time').value;
    dong.then(res => {
      res.dong(arr,itemImage,time);
    });
    
    
  }

  //导出
  document.getElementById('dc').onclick =  function() {
    let p = import('./dc.js');
    p.then(res => {
      res.f(arr);
    }); 
  }


}


