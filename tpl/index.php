<?php
// ヘッダーHTML呼び出し
  require_once './tpl/header.html';
  echo tasi(rand(),rand());
?>
  <form method="get" action="./next.php">
  <input type="text" name="data">
  <input type="submit" value="追加">
  </form>
<?php
  // フッターHTML呼び出し
  require_once './tpl/footer.html';
?>