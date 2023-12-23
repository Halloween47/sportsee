import axios from "axios";


export class DataService {

    constructor() {
        this.isMocked = true;
    }

    async getUser(userId) {
      if (this.isMocked) {
          let users = await axios.get('http://localhost:3000/datasMocked.json')
              .then(reponse => reponse.data.users);
          return users.filter(user => user.id === userId);
      }
  }

    async getActivity(userId) {
        if (this.isMocked) {
            let activities = await axios.get('http://localhost:3000/datasMocked.json')
                .then(reponse => reponse.data.activity);
            return activities.filter(activity => activity.userId === userId);
        }
    }

    /* Ton service à pour responsabilité de traiter la donnée

     chaque fonction doit être de la forme ci dessous


     async nomDeLaMethode(userId){

       if(isMocked){

          // j'appelle le get de dataMocked (avec axios)
          // Je fais un filter sur le userId
          // Je renvoi le résulat (return)

       } else{
          // A FAIRE DANS UN DEXUIEME TEMPS

          // j'appelle le get du backend (avec axios)
          // Je renvoi le résulat (return)

          j
       }


     }


     */

    /*
       constructor() {
          this.isMocked = true;
       }

       async getActivity(userId) {
          if (this.isMocked) {

             //trouver la bonne url
             axios.get('/user?ID=12345')
                .then(function (response) {
                   //stocker dans une variable
                   //response.json
                }.filter((donnee) => donnee.id === userId))


             //return variable

          }
          else {
             console.log("appel backend")
          }
       }

    */
    /*
 //////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////
 //////////////////////////////////////////////////////////////////////////////////////////
    getSessions(userId) {
        return
            {
                "userId":12,
                "sessions":[
                   {
                      "day":"L",
                      "sessionLength":30
                   },
                   {
                      "day":"M",
                      "sessionLength":23
                   },
                   {
                      "day":"M",
                      "sessionLength":45
                   },
                   {
                      "day":"J",
                      "sessionLength":50
                   },
                   {
                      "day":"V",
                      "sessionLength":0
                   },
                   {
                      "day":"S",
                      "sessionLength":0
                   },
                   {
                      "day":"D",
                      "sessionLength":60
                   }
                ]
             };
    }

    getPerf(userId) {
        return ([
            {
                "userId":12,
                "kind":{
                   "1":"cardio",
                   "2":"energy",
                   "3":"endurance",
                   "4":"strength",
                   "5":"speed",
                   "6":"intensity"
                },
                "data":[
                   {
                      "value":80,
                      "kind":1
                   },
                   {
                      "value":120,
                      "kind":2
                   },
                   {
                      "value":140,
                      "kind":3
                   },
                   {
                      "value":50,
                      "kind":4
                   },
                   {
                      "value":200,
                      "kind":5
                   },
                   {
                      "value":90,
                      "kind":6
                   }
                ]
             },
             {
                "userId":18,
                "kind":{
                   "1":"cardio",
                   "2":"energy",
                   "3":"endurance",
                   "4":"strength",
                   "5":"speed",
                   "6":"intensity"
                },
                "data":[
                   {
                      "value":200,
                      "kind":1
                   },
                   {
                      "value":240,
                      "kind":2
                   },
                   {
                      "value":80,
                      "kind":3
                   },
                   {
                      "value":80,
                      "kind":4
                   },
                   {
                      "value":220,
                      "kind":5
                   },
                   {
                      "value":110,
                      "kind":6
                   }
                ]
             }
        ])



    }

    getUser(userId) {
        return ([
            {
                "id": 12,
                "userInfos": {
                    "firstName": "Karl",
                    "lastName": "Dovineau",
                    "age": 31
                },
                "todayScore": 0.12,
                "keyData": {
                    "calorieCount": 1930,
                    "proteinCount": 155,
                    "carbohydrateCount": 290,
                    "lipidCount": 50
                }
            },
            {
                "id": 18,
                "userInfos": {
                    "firstName": "Cecilia",
                    "lastName": "Ratorez",
                    "age": 34,
                },
                "todayScore": 0.3,
                "keyData": {
                    "calorieCount": 2500,
                    "proteinCount": 90,
                    "carbohydrateCount": 150,
                    "lipidCount": 120
                }
            }
        ])
    }
    */
}