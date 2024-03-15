
import './App.css';




function App() {

  
  function naresh(){
    const first1   =document.getElementById('fname').value;
    const last1    =document.getElementById('lname').value;
    const number1  =document.getElementById('numb').value;
    const mail1    =document.getElementById('mail').value;
    const password1=document.getElementById('pass').value;

    if(first1 || last1 || number1 || mail1 || password1 =="")
    {
      document.getElementById('fname').style.border="3px solid red";
      document.getElementById('lname').style.border="3px solid red";
      document.getElementById('numb').style.border="3px solid red";
      document.getElementById('mail').style.border="3px solid red";
      document.getElementById('pass').style.border="3px solid red";
      
    }



    if(first1=='' || first1==null || first1.length<=3)
    {
      alert("Please enter valid text first");
      document.getElementById('fname').style.border="4px solid red";
      return false;
    }


    if(last1=='' || last1==null)
    {
      alert("Please enter valid text last");
      document.getElementById('lname').style.border="4px solid red";
      return false;
    }


    if(number1=='' || number1==null || number1.length<=8)
    {
      alert("Please enter valid number");
      document.getElementById('numb').style.border="4px solid red"
      return false;
    }


    if(mail1=='' || mail1==null)
    {
      alert("Please enter valid mail");
      document.getElementById('mail').style.border="4px solid red";
      return false;
    }


    if(password1=='' || password1==null)
    {
      alert("Please enter valid password");
      document.getElementById('pass').style.border="4px solid red";
      return false;
    }


    if(first1  && last1 && password1 && mail1 && number1.length>1)
    {
      
      document.getElementById('a').href="http://localhost:3000/";

    }


    
  }













  function Fname(){
    const first1   =document.getElementById('fname').value;

    if(first1=='' || first1==null || first1.length<=3)
    {
      document.getElementById('fname').style.border="4px solid red";
      document.getElementById('fn').innerHTML="NOT 😢 VALID";
      document.getElementById('fn').style.color="red"

    }
    else
    {
      document.getElementById('fn').innerHTML="OK 😍  VALID NAME";
      document.getElementById('fn').style.color="yellow"
    }

  }






  function Lname(){
    const first1   =document.getElementById('fname').value;
    const last1    =document.getElementById('lname').value;

    if(first1.length>=3)
    {
      document.getElementById('fn').innerHTML="";
      document.getElementById('fname').style.border="";

    }
    if(first1=='' || first1==null || first1.length<=3)
    {
      document.getElementById('fn').innerHTML="NOT 😢 VALID";
      document.getElementById('fn').style.color="red"

    }
  

    if(last1.length>=3)
    {
      document.getElementById('ln').innerHTML="OK 😍 VALID";
      document.getElementById('ln').style.color="yellow"
    }





  }



  
  function Numb(){
    const last1    =document.getElementById('lname').value;
    const number1  =document.getElementById('numb').value;
    {
      if(last1.length>4)
      {
        document.getElementById('ln').innerHTML="";

      }
      if(number1.length==9)
      {
        document.getElementById("no").innerHTML="OK 😍 VALID"
        document.getElementById('no').style.color="yellow"

      }
      else if (number1.length<9 || number1.length<11)
      {
        document.getElementById("no").innerHTML="NOT 😢 VALID"
        document.getElementById('no').style.color="red"
      }


    }


  }



  function Mail(){
    const number1  =document.getElementById('numb').value;
    const mail1    =document.getElementById('mail').value;
    if(number1.length==10)
      {
        document.getElementById("no").innerHTML=""

      }
      if(mail1.length>=8)
      {
        document.getElementById("mai").innerHTML="OK 😍 VALID MAIL";
        document.getElementById("mai").style.color="yellow"
      }




  }
  function Pass(){
    const mail1    =document.getElementById('mail').value;
    const password1=document.getElementById('pass').value;
    if(mail1.length>=8)
      {
        document.getElementById("mai").innerHTML="";
      }
      if(password1.length>=8)
      {
        document.getElementById("pas").innerHTML="OK 😍 VALID";
        document.getElementById("pas").style.color="yellow"
      }
      if(password1.length<=8)
      {
        document.getElementById("pas").innerHTML="NOT 😢 VALID";
        document.getElementById("pas").style.color="red"
      }

  }








  return (
    <div id='main'>
      

      <input    type='text'      id='fname'  placeholder='FIRST NAME'    onBlur={()=>Fname()} /><br/>
      <h6 id='fn'></h6>
      <input    type='text'      id='lname'  placeholder='SECOND NAME'   onKeyDown={()=>Lname()} /><br/>
      <h6 id='ln'></h6>
      <input    type='number'    id='numb'   placeholder='MOBILE NUMBER' onKeyDown={()=>Numb()}  /><br/>
      <h6 id='no'></h6>
      <input    type='emaii'     id='mail'   placeholder='MAIL ID'       onKeyDown={()=>Mail()}/><br/>
      <h6 id='mai'></h6>
      <input    type='password'  id='pass'   placeholder='MAIL PASSWORD' onKeyDown={()=>Pass()}/><br/>
      <h6 id='pas'></h6>
      <button onClick={()=>naresh()}   id='but' > <a id='a'> SIGN IN</a></button>


     





     

        







    </div>
  );
}

export default App;
