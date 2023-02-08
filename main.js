<script>
   function checkEvenOdd() {
      var num = parseInt(prompt("Numara gir : "));
      if (num % 2 == 0) {
         alert(num + " Bu çift sayıdır.");
      } else {
         alert(num + " Bu tek sayıdır.");
      }
   }
</script>

<button onclick="checkEvenOdd()">Tıkla !</button>
