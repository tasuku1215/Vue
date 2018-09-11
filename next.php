<?php
  // コンフィグ呼び出し
  require_once './config.php';
  // ファンクション呼び出し
  require_once './func/func.php';
  $link=mysqli_connect(HOST,DB_USER,DB_PASS,DB_NAME);
  mysqli_set_charset($link,'utf8');
  $sql="INSERT INTO test('name')VALUE(".$_GET['data'].")";
  $result=mysqli_query($link,$sql);
  $sql="SERECT * FROM test";
  $result=mysqli_query($link,$sql);
  for($i=1;$row=mysqli_fetch_assoc($result);$i++){
    foreach($row as $val){
      echo $val."/n";
    }
  }
// テンプレート呼び出し
  require_once './tpl/next.php';
?>