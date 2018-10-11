      function CreateChessBoard() {
        var wrapDiv = document.createElement('div');
        wrapDiv.id = "board_wrap";
        return wrapDiv;
      }

      function CreateLetterLines() {
        var letterDiv = document.createElement('div');
        letterDiv.className = "letter_blocks";
        letterDiv.innerHTML = "<span>A</span><span>B</span><span>C</span><span>D</span><span>E</span><span>F</span><span>G</span><span>H</span>";
        return letterDiv;
      }

      function CreateCentralBlockWrap() {
        var centralWrap = document.createElement('div');
        centralWrap.id = "central_block_wrap";
        return centralWrap;
      }

      function CreateNumberLines() {
        var numberDiv = document.createElement('div');
        numberDiv.className = "numbers_blocks";
        numberDiv.innerHTML = "<span><p>8</p></span><span><p>7</p></span><span><p>6</p></span><span><p>5</p></span><span><p>4</p></span><span><p>3</p></span><span><p>2</p></span><span><p>1</p></span>";
        return numberDiv;
      }

      function CreateCentralBlock() {
        var centralBlock = document.createElement('div');
        centralBlock.id = "central_block";
        return centralBlock;
      }

      function CreateCentralField() {
        var chessField = [];
        for (var i = 0; i < 64; i++) {
          chessField[i] = "<div id='cf_' class='chess_field'></div>";
        }
        var readyChessField = chessField.join('');
        return readyChessField;
      }

      
      
      function renderPage() {
        document.body.appendChild(CreateChessBoard());  
        board_wrap.appendChild(CreateLetterLines());
        board_wrap.appendChild(CreateCentralBlockWrap());
        central_block_wrap.appendChild(CreateNumberLines());
        central_block_wrap.appendChild(CreateCentralBlock());
        central_block.innerHTML = CreateCentralField();
        for (var el = document.getElementById('cf_'), i = 1; el != null; el = document.getElementById('cf_'), i++) {
          el.setAttribute('id', el.getAttribute('id') + i);
        }
        central_block_wrap.appendChild(CreateNumberLines());
        board_wrap.appendChild(CreateLetterLines());
      }