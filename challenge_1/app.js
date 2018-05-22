document.addEventListener("DOMContentLoaded", function(event) {
  var play = true;  //xCat
  var xScore = 0;
  var oScore = 0;
  var xCat = "X";
  var oCat = "x";

  function changePlayer1Name() {
    document.getElementById('usernamep1').innerHTML = this.value + ' :';
    this.remove();
  }

  function changePlayer2Name() {
    document.getElementById('usernamep2').innerHTML = this.value + ' :';
    this.remove();
  }

  function restart() {
    var squares = document.getElementsByTagName("TD");
    for (let i = 0; i < squares.length; i++) {
      squares[i].innerHTML = "";
    }
    if (play) {
      document.getElementById('scoreKeeper').innerHTML = xCat;
      document.getElementById('scoreKeeperMessage').innerHTML = '\'s Turn!';
    } else {
      document.getElementById('scoreKeeper').innerHTML = oCat;
      document.getElementById('scoreKeeperMessage').innerHTML = '\'s Turn!';
    }
  }

  function changeMessage(player, message) {
    document.getElementById('scoreKeeper').innerHTML = player;
    document.getElementById('scoreKeeperMessage').innerHTML = message;
    document.getElementById('xScore').innerHTML = xScore;
    document.getElementById('oScore').innerHTML = oScore;
    setTimeout(restart, 1000);
  }

  function checkRowWin(children) {
    var rowWinX = 0;
    var rowWinO = 0;
    for (let j = 0; j < children.length; j++) {
      if (children[j].innerHTML === xCat) {
        rowWinX +=1;
      } else if (children[j].innerHTML === oCat) {
        rowWinO +=1;
      }
    }
    if (rowWinX === 3) {
      xScore += 1;
      changeMessage(xCat, 'Won!')
    } else if (rowWinO === 3) {
      oScore += 1;
      changeMessage(oCat, 'Won!')
    }
  };

  function checkColumnWin(children, columns) {
    for (let i = 0; i < children.length; i++) {
      if (children[i].innerHTML === xCat) {
        columns[i] += 1;
        if (columns[i] === 3) {
          xScore += 1;
          changeMessage(xCat, 'Won!')
        }
      } else if (children[i].innerHTML === oCat){
        columns[i] -= 1;
        if (columns[i] === -3) {
          oScore += 1;
          changeMessage(oCat, 'Won!')
        }
      }
    }
  };

  function checkDiagWin() {
   var arrM = ["1-1", "2-2", "3-3"];
   var arrm = ["1-3", "2-2", "3-1"];

   for (let i = 0; i < 3; i++) {
    arrM[i] = document.getElementById(arrM[i]).innerHTML;
    arrm[i] = document.getElementById(arrm[i]).innerHTML;
   }

   if (arrM.every(elem => {return elem === xCat}) || arrm.every( elem => {return elem === xCat})) {
    xScore += 1;
    changeMessage(xCat, 'Won!')
   }

   if (arrM.every(elem => {return elem === oCat}) || arrm.every( elem => {return elem === oCat})) {
    oScore += 1;
    changeMessage(oCat, 'Won!')
   }
  };
  
  function checkWin() {
    var rows = document.getElementsByClassName("row");
    var columns = {0:0, 1:0, 2:0};
    checkDiagWin();
    for (let i = 0; i < rows.length; i++) {
      var children = rows[i].children;
      checkRowWin(children);
      checkColumnWin(children, columns);
    }
  };
  
  function placePiece() {
    if (this.innerHTML === xCat || this.innerHTML === oCat){
      console.log('Choose another spot to play!')
    } else {
      if (play) {
        document.getElementById('scoreKeeper').innerHTML = oCat;
        document.getElementById('scoreKeeperMessage').innerHTML = '\'s Turn!';
        this.innerHTML = xCat;
        play = false; 
      } else {
        document.getElementById('scoreKeeper').innerHTML = xCat;
        document.getElementById('scoreKeeperMessage').innerHTML = '\'s Turn!';
        this.innerHTML = oCat;
        play = true;
      }
    }
    checkWin();
  };


//init
  var squares = document.getElementsByTagName("TD");
  for (let i = 0; i < squares.length; i++) {
    squares[i].onclick = placePiece;
  }

  var restartButton = document.getElementById('restart');
  restartButton.onclick = restart;

  var form = document.getElementById('p1');
  form.click = changePlayer1Name;
  form.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById('p1').click();
    }
  });

  var form2 = document.getElementById('p2');
  form2.click = changePlayer2Name;
  form2.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById('p2').click();
    }
  })

  document.getElementById('scoreKeeper').innerHTML = xCat;
  document.getElementById('scoreKeeperMessage').innerHTML = '\'s Turn!';
});

