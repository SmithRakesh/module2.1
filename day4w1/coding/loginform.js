
        const data = [
            {
                name: "Smith Rakesh",
                password:"localstoragepass",
                type:"admin"
            },
            {
                name:"Subash", 
                password:"something",
                type:"admin"
            },
            {
                name:"Nihal",
                password:"anything",
                type:"user"
            },
            {
                name:"Dennis",
                password:"newthing",
                type:"user"
            },
            {
                name:"Deepak",
                password:"nothing",
                type:"user"
            }
        ]
            
        let stringData = JSON.stringify(data)

        let localData = localStorage.setItem("LoginData",stringData)

        window.addEventListener('load',function(){

            let form = document.getElementById('submit')

            form.addEventListener('click',function(){

                
                let username = document.getElementById("name").value
                let password = document.getElementById("password").value
                
                // location = "dash.html"
                alert("Wrong name or password")


                let currentTime = new Date().toLocaleTimeString();

            
            })


        })


