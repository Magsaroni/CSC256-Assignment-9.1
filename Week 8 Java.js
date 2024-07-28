   // ALL "CHECKERS" PARTS WILL BE REPLACED WITH "CHESS", TO MAKE IT EASIER
   
   // Create a 2D array to manage the layout of the pieces on the board.
   arrPieces = [
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    ['w', null, 'w', null, 'w', null, 'w', null],
    [null, 'w', null, 'w', null, 'w', null, 'w'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['b', null, 'b', null, 'b', null, 'b', null],
    [null, 'b', null, 'b', null, 'b', null, 'b'],
    ['b', null, 'b', null, 'b', null, 'b', null]
   ]

       // create a function to build the chessboard.
   function createChessboard(chessboard){
       // a typical chessboard has 8 rows and 8 columns. We will build those w a nested loops.
       for (var i=0; i< 8; i++){
           // loop to build the columns
           for (var j=0; j < 8; j++){
               //squares here.
               var chessSquare = document.createElement("div");

               // assign a css class to each square.
               chessSquare.className = "chessSquare";

               //add an id so we know where to move the pieces to and fro.
               chessSquare.setAttribute("id", "div" + i +j);

               //check to see if this an even or odd square.
               // % is modulus (mod) it divides the first number by the second number but only returns the remainder. If the remainder is 0 when our row+column is divided by 2, then it was an
               //(+)even number.
               if((i+j) % 2 == 1){
                   chessSquare.style.backgroundColor = "#375971ff";
//add an event listener for the click on the square event, then call the movePiece function
                   chessSquare.addEventListener("click", movePiece);
                   
               }

               // add the chess square to the board div
               chessboard.appendChild(chessSquare);

               // if the corresponding element in the array is not null, ass a chackers piece to the square
               if (arrPieces[i][j]){
                createPiece("piece" + i + j, "chessPiece-" + arrPieces[i][j], chessSquare);
               }

               
           }
       } 
}

//function to create the checkers piece.
function createPiece(id, pieceClass, theSquare){
    // create a new div
    var newPiece = document.createElement("div");
    newPiece.setAttribute("id", id);
    newPiece.classList.add("chessPiece");
    newPiece.classList.add(pieceClass);
    newPiece.addEventListener("click", savePieceId);
    theSquare.appendChild(newPiece);
}
function movePiece(event){
    console.log("movePiece function called");
}

function savePieceId(event){
    console.log("savePieceId function is called");
}
