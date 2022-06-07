
function cancel(){

}

function validate(){
        var name = document.getElementById("name");
        var email = document.getElementById("email");
        var website = document.getElementById("website");
        

        
        
        
        
        
        
        
        if(name.value.length<=0){
            
            alert("the name field is required");
            name.focus();
            return;
            
            
        }
        if(email.value.length<=0){
            
            alert("the name field is required");
            email.focus();
            return;
            
            
        }
        if(website.value.length<=0){
            
            alert("the name field is required");
            website.focus();
            return;

            
            
        }
        if(image.value.length<=0){
            
            alert("the name field is required");
            image.focus();
            return;
            
        }
        
        
        
        
        else{
            AddRow();
        }
    }
var n = 1;
var x = 0;

function AddRow(){
    
    


    
    let txt = ""
    let aaa =""
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    var website = document.getElementById("website").value;
    

    var image = document.getElementById("image").value;
    
    
    
    var radio = document.getElementsByName('gender');
    for(i=0 ; i<radio.length ; i++){
        if(radio[i].checked==true)
        
        txt = txt + radio[i].value;
        
    }

    var check = document.getElementsByClassName('checkbox');
    var str =" ";
    for(i=0 ; i<check.length ; i++){
        if(check[i].checked==true)
        str= str + check[i].value +" ";
    }
    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    
    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    
    

    cel1.innerHTML = name + "<br>" + email +"<br>" + `<a href="${website}">${website}</a>` + "<br>" + txt + "<br>" + str;
    cel2.innerHTML = `<img style="height:150px;  " src="${image}" >`;
    n++;
    
}


