let apiLegos = [];      //apiLegos is declared storing an empty array. This variable is accessible to the functions below.

export const useLegos = () => {   //useLegos function is declared
  return [...apiLegos]            //returns a copy of apiLegos
}

//Pulls LegoColorss data from the api. LegoColorss is the complete array of objects.
export const loadLegos = () => {          //declares loadLego function with no parameter
  return fetch("../data/lego-colors.json")    //returns a fetch call for the lego colors json
    .then(response => response.json())      //after fetch call is completed, data is stored in response then put into json format
    .then((legoArray) => {                //after json() method is completed, data is stored in legoArray
      apiLegos = legoArray.LegoColorss;   //apiLegos is set to legoArray.LegoColorss
      return legoArray.LegoColorss;       //returns legoArray.LegoColorss. 
    })
};