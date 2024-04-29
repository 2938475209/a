export let list = [];
export function add() {
  
  let f1 = false;
  let f2 = false;
  
  let dataList = [];//config中的数据
  //头像对象
  let name = null;
  let url = null;
  //得到最外层的div
  let out = document.getElementById('out');
  //添加按钮
  let add = document.getElementById('add');

  //得到提交按钮事件
  document.getElementById('tj').onclick = function() {
    let p = import('./zhuan.js');
    let div = document.querySelectorAll('.add')[0];
    div.style.display = 'none';

    //判断个数
    if(f1&&!f2 || !f1&&f2){
      alert('请输入完整信息');
    }
    if(dataList.length > 0 && f1 && f2){
      let obj = {
        name : name,
        url : url
      };
      list.push(obj);
      list = list.concat(dataList);
      div.style.display = 'none';
      inputName.value = '';
      document.getElementById('itemImg').src = '#';
      config.value = '';

      p.then(res => {
        res.zhuan(list);
      })

    }
    if(f1 && f2 && dataList.length == 0){
      let obj = {
        name : name,
        url : url
      };
      list.push(obj);
      div.style.display = 'none';

      inputName.value = '';
      document.getElementById('itemImg').src = '#';
      config.value = '';

      p.then(res => {
        res.zhuan(list);
      })
    }

    if(dataList.length > 0 && !f1 && !f2){
      list = list.concat(dataList);
      div.style.display = 'none';

      inputName.value = '';
      document.getElementById('itemImg').src = '#';
      config.value = '';

      p.then(res => {
        res.zhuan(list);
      })
    }
    

  }

  let pictureAdd = document.getElementsByClassName('pictureAdd')[0];//得到头像的输入框
  //点击pictureAdd时，就相当于点击此div下的input
  pictureAdd.onclick = function () {
    inputPicture.click();
  }


  //得到头像
  let inputPicture = document.getElementById('inputPicture');
  inputPicture.onchange = function() {
    let e = arguments[0];//拿到事件
    let file = e.target.files[0];//得到文件
    url = '../image/' + file.name;
    
    let itemImg = document.getElementById('itemImg');//头像显示
    itemImg.src = url
    f1 = true;
  }
  //得到名称
  let inputName = document.getElementById('inputName');
  inputName.onchange = function() {
     name = inputName.value;
     f2 = true;
  }
  //得到配置文件中的内容
  let config = document.getElementById('config'); //配置文件的事件
  config.onchange = function(event) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
      dataList = event.target.result;
      dataList = JSON.parse(dataList);
    }  
  }
}