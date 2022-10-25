//darkmode
        let count = 0;

        document.querySelector('.bg-dark').addEventListener('click', function(){
          count += 1;
          if ( count % 2 == 1) {
            document.querySelector('.bg-dark').innerText=("Light")
          } else {
            document.querySelector('.bg-dark').innerHTML=("Dark")
            document.querySelector('body').classList.toggle('show_darkmode');
          }
        })
