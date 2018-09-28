(function(){
  'use strict';
  var vm = new Vue({
    el: '#app',
    data: {
      newItem:'',
      name: 'taguchi',
      todos:[
        'task 1',
        'task 2',
        'task 3'
      ]
    },
    methods:{
      addItem:function(){
        this.todos.push(this.newItem);
        this.newItem='';
      },
      deleteItem:function(index){
        if(confirm('are you sure?')){
          this.todos.splice(index,1);
        }
      }
    }
  });
  })();
  // (function (handleload) {
  //   var xhr = new XMLHttpRequest;
  
  //   xhr.addEventListener('load',handleload, false);
  //   xhr.open('GET', 'data.json', true);
  //   xhr.send(null);
  // }(function handleLoad (event) {
  //   var xhr = event.target,
  //       obj = JSON.parse(xhr.responseText);
  
  //   console.log(obj);
  // }));
// $.ajax({
//   type: "get",
//   url: "test.json",
//   data: {name: 'chara'},
//   dataType: "json",
//   success: function(data, dataType){
//     console.log($);
//   }
// });
// $.ajax({
//   url: '../data/Json.json',
//   dataType : 'json'
// });
 $(function(){
    $.ajax({ // json読み込み開始
        type: 'GET',
        url: '../data/Json.json',
        dataType: 'json'
        })
        .then(
        function(json) { // jsonの読み込みに成功した時
            console.log('成功');
            for(var i in json){
                $("#output").append("<li>" + json[i].text +"</li>");
            }
        },
        function() { //jsonの読み込みに失敗した時
            console.log('失敗');
        }
    );
});
// console.log(data);