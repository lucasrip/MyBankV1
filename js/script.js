function trocar(obj)
{
	        if(obj == cadastrar)
			{
			btn2.disabled = true;
		    btn3.disabled = true;
			
			}
		
        	 if(obj == depositar)
			{
			btn1.disabled = true;
		    btn3.disabled = true;
	
			}
			
           if(obj == creditar)
			{
			btn1.disabled = true;
		    btn2.disabled = true;
		    
			}

           		
	
			if(obj.style.display == "none")
			{
				obj.style.display = "inline-block";
				
			}
			else
			{  
		     
				obj.style.display = "none";
				btn1.disabled = false;
		        btn2.disabled = false;
		        btn3.disabled = false;
		        
			}
			 if(obj == cadastrar)
			{
	          return trocar(mostra_registro);
			}
             if(obj == depositar)
			{
	          return trocar(mostra_deposito);
			}
		 if(obj == creditar)
			{
	          return trocar(mostra_creditar);
			}
}
 function numeros(num)
 {
        var er = /[^0-9.]/;
        er.lastIndex = 0;
        var campo = num;
        if (er.test(campo.value)) 
		{
			
          campo.value = "";
		 
        }
    }

//operacoes

function recebe_saldo(obj)
{
    
 	this.saldo = parseFloat(document.getElementById('saldo').value);
    this.nome = document.getElementById('nome').value;
		if(obj == saldo)
		{		
		 this.saldo_atual = saldo
		}    
		 
	 if(obj != null)
	 {
		 this.saldo_atual = saldo;
	 }
 
 cadastro();
}


function cadastro()
{     
	 
	 if(nome != "")
	  {
		 document.getElementById("mostra_nome").textContent = "Nome : " +nome;
         document.getElementById("mostra_saldo").textContent = "Saldo : " +saldo;  
		  
		  
	  let texto_saldo = saldo;
      let titulo = document.getElementById("nome").value;
	  let deposito = parseFloat(document.getElementById('valor_deposito').value) ;
	  
	  	  
		  
		let blob = new Blob(["nome : ",titulo," | saldo : ",texto_saldo], { type: "text/plain;charset=utf-8" });
       saveAs(blob, titulo + ".txt");
		
		alert ("cadastro feito com sucesso");
		
      }	
	  else
		  if(nome ==  "")
	      {
		   alert("campo nome nao pode ficar vazio");
	      }
	
}
function deposito()
{
	  var nome = document.getElementById('nome').value; 
      recebe_saldo()
	  
	  var deposito = parseFloat(document.getElementById('valor_deposito').value) ;
	   saldo_deposito = saldo_atual + deposito;//calcula saldo
	
	  
                document.getElementById("mostra_nome_cadastro").textContent = "Nome : " +nome;
                document.getElementById("mostra_saldo_cadastro").textContent = "Saldo : " +saldo_atual;
	            document.getElementById("mostra_qtd_depositada").textContent = "deposito : " +deposito;
                document.getElementById("mostra_saldo_atual").textContent = "Saldo_atual : " +saldo_deposito;			

	            
	  //armazena cadastro e deposito
		  if(nome != "")
	       {
			   
       
			
				 let texto_saldo = saldo_atual;
                 let titulo = document.getElementById("nome").value;
	             let deposito = parseFloat(document.getElementById('valor_deposito').value) ; 
			     
				
				 let blob = new Blob(["nome : ",titulo," | saldo_inicial : ",texto_saldo," | Deposito : ",deposito," | Saldo atual ",saldo_deposito], { type: "text/plain;charset=utf-8" });
                saveAs(blob, titulo + ".txt");
				  
				alert("deposito feito");
				
		   }
		   else
		      if(nome ==  "")
	           {
		        alert("faca o cadastro primeiro");
	           }
 return recebe_saldo(saldo_deposito)
}



function credito()
{
	  var nome = document.getElementById('nome').value;   
	  var credita = parseFloat(document.getElementById('creditar_valor').value) ;
	  saldo_credita = saldo_atual - credita;
	  recebe_saldo()
	            
	
	  //armazena cadastro e deposito
		  if(nome != "")
	       {
			    document.getElementById("nm_cadastro").textContent = "Nome : " +nome;
                document.getElementById("saldo_cadastro").textContent = "Saldo : " +saldo_atual;
	            document.getElementById("retirado").textContent = "creditado : " +credita;
                document.getElementById("saldo_atual_creditar").textContent = "Saldo_atual : " +saldo_credita;
			    
				 let texto_saldo = saldo_atual;
                 let titulo = document.getElementById("nome").value;
	              
			     
				
		     	 let blob = new Blob(["nome : ",titulo," | saldo_inicial : ",texto_saldo," | creditado : ",credita," | Saldo atual ",saldo_credita], { type: "text/plain;charset=utf-8" });
                 saveAs(blob, titulo + ".txt");
				  
				alert("valor creditado ");

	       }
		   else
		     if(nome ==  "")
	         {
		      alert("faca o cadastro primeiro");
	         }
	return recebe_saldo(saldo_credita)
}
//salva cadastros e mostra
function apaga(num1,num2,num3,num4)
{
	
	if(nome != null)
	{
	  	this.saldo="";
		saldo.value="";
		num1.value="";
		num2.value="";
		num3.value="";
		num4.value="";
		
		mostra_nome.value="";
		mostra_saldo.value="";
		
		mostra_nome_cadastro.value="";
		mostra_saldo_cadastro.value="";
		mostra_qtd_depositada.value="";
		mostra_saldo_atual.value="";
		
		nm_cadastro.value="";
		saldo_cadastro.value="";
		retirado.value="";
		saldo_atual_creditar.value="";
		
		
	
		
		
	alert("registro apagado")
	}
   else if (nome == null)
   {
   	alert("nao ha registros")	   
   }
}
