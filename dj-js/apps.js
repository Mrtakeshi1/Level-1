function handleMouseOver(event) {
    event.target.style.backgroundColor = 'blue';
  }
  
  function handleMouseDown(event) {
    event.target.style.backgroundColor = 'red';
  }
  
  function handleMouseUp(event) {
    event.target.style.backgroundColor = 'yellow';
  }
  
  function handleDblClick(event) {
    event.target.style.backgroundColor = 'green';
  }
  
  function handleWheel(event) {
    const box = document.getElementById('box');
    box.style.backgroundColor = 'orange';
  }
  
   const box = document.getElementById('box')
      box.addEventListener('mouseover', (e) => handleMouseOver(e));
      box.addEventListener('mousedown', (e) => handleMouseDown(e));
      box.addEventListener('dblclick', (e) => handleDblClick(e));
      box.addEventListener('mouseup', (e) => handleMouseUp(e));
      document.addEventListener('wheel', (e) => handleWheel(e));

    
function keyPressB(e) {
    if(e.keyCode === 66) {
    box.style.backgroundColor = 'blue';
    }
  }

  function keyPressR(e) {
     if(e.keyCode === 82) {
     box.style.backgroundColor = 'red';
    }
  }

  function keyPressY(e) {
     if(e.keyCode === 89) {
     box.style.backgroundColor = 'yellow';
    }
  }

  function keyPressG(e) {
     if(e.keyCode === 71) {
     box.style.backgroundColor = 'green';
    }
  }

  function keyPressO(e) {
     if(e.keyCode === 79) {
     box.style.backgroundColor = 'orange';
    }
  }
    var window = document.getElementById('window')
      window.addEventListener('keydown', (e) => keyPressB(e));
      window.addEventListener('keydown', (e) => keyPressR(e));
      window.addEventListener('keydown', (e) => keyPressY(e));
      window.addEventListener('keydown', (e) => keyPressG(e));
      window.addEventListener('keydown', (e) => keyPressO(e));