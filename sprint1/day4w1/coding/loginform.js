        const data = [
            {
                username: "Smith Rakesh",
                password:"password",
                type:"admin"
            },
            {
                username:"Subash", 
                password:"password",
                type:"admin"
            },
            {
                username:"Nihal",
                password:"password",
                type:"user"
            },
            {
                username:"Dennis",
                password:"password",
                type:"user"
            },
            {
                username:"Deepak",
                password:"password",
                type:"user"
            }
        ]

        let loginData = JSON.parse(localStorage.getItem("loginData")) || []
        let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}

        window.addEventListener('load',function(){

            let form = document.querySelector('form')
            form.addEventListener('submit',handleSubmit)
        })

            
            function handleSubmit (e){
                e.preventDefault()

                let form = new FormData(e.target)

                let username = form.get("username")
                let password = form.get("password")

                let userDetails = {
                    username,
                    password
                }

                if(authCheck(userDetails)){
                    const { username , type} = authCheck(userDetails)
                    const time = new Date().toLocaleDateString()

                    const payLoad = {
                        username,
                        type,
                        time,
                    }

                    loginData = [...loginData,payLoad]
                    savingToLocalStorage ('loginData',loginData)
                    savingToLocalStorage ('currentUser',payLoad)
                    redirect(payLoad)

                }
                else{
                    let displayError = document.querySelector('#display')
                    displayError.textContent = "INVALID CREDENTIAL"
                }

                function authCheck (input) {
                    return data.find( user =>  user.username === input.username && user.password === input.password )
                }

                function savingToLocalStorage(name,value){
                    if(typeof value !== 'string'){
                        localStorage.setItem(name,JSON.stringify(value))
                    }else {
                        localStorage.setItem(name,value)
                    }
                }

                function redirect (currentUser){
                    if(currentUser.type === 'admin'){
                        location = "admin.html"
                    }else if (currentUser.type === 'user'){
                        location = "dash.html"
                    }
                }
        }


