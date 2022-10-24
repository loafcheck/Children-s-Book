# Children-s-Book
Process of building an online subscription website.

![Screen Shot 2022-10-25 at 12 46 43 AM](https://user-images.githubusercontent.com/106638262/197571270-9c596cfb-bd66-4c82-be81-eb4692bd824f.png)









About this repository

1. Practiced utilizing Bootstrap to build a website.

2. form : <br>
<form action = "xyz.html"> <br>
🔍you can submit form to xyz.html address

3.Javascript:
toggle : 
ex) document.querySelector('.list-group').classList.toggle('show')
🔍It acts like post-it.

classList.add:
ex) document.querySelector('.black-bg').classList.add('show-modal')
🔍you can add a class giving css display:none/block or visibility: hidden/visible

Boolean(if):
const pw = document.getElementById('exampleInputPassword1');
🔍You can claim a const variable. 
🔍pw.value.length : value means the input/ length: is the input length

document.querySelector('.btn-primary').addEventListener('click', function(){
          if (pw.value.length < 6) {
            alert ('Please enter more than 6 digits')
          }
        })
