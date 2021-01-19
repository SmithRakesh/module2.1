const country = "India"

const checkContinent = (countryName) => {
    switch (countryName) {
        case "India": case "Singapore" :case "Nepal":case "China":
            console.log("Asia")
            break;
         case "Brazil": case "Argentina" :
             console.log("South America") 
             break;
         case "South Africa": case "Nigeria":
             console.log("South Africa")      
            break;
         case "Germany": case "Sweden": case "France":
             console.log("Europe")  
            break;
         case "Canada": case "USA": case "Mexico":
             console.log("North America")
             break;
         default:
             console.log("Invalid")
            break;
    }
}

checkContinent(country)