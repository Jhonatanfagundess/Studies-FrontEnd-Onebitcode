function validarEmail(email){
   const regex = /^(?=.{2,})(?=[^@]*@)(?=.{2,}[^@]*@.{2,})(?=.*\..{2,}).*$/;
   if(regex.test(email)){
      throw new Error("Email inválido");

   }


}

function ValidarSenha(passoword){
   const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regex.test(passoword)) {
        throw new Error("Senha inválida. Deve conter pelo menos 8 caracteres, uma letra minúscula, uma letra maiúscula, um número e um caractere especial.");
    }
}


document.getElementById('register').addEventListener('submit', function(event){
   event.preventDefault()
   const email = document.getElementById('email').value
   const passoword = document.getElementById('passoword').value
   const msg = document.getElementById('error')
   msg.innerHTML = ""
   try{
      validarEmail(email)
      ValidarSenha(passoword)
      alert('Feito')
   }catch{
      msg.innerHTML = error
   }
})