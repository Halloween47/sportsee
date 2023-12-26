import axios from "axios";


export class DataService {

    constructor() {
        this.isMocked = false;
    }

    async getUser(userId, url) {

      if (this.isMocked) {
          console.log("test Mocked Users")
          let users = await axios.get(url + "/datasMocked.json")
              .then(reponse => reponse.data.users);
          return users.filter(user => user.id === userId);
      }
      else {
         console.log("test Backend Users")
         let users = await axios.get(`http://localhost:3000/user/${userId}`)
              .then(reponse => reponse.data);
              // console.log(users.data);
              let testTableauData = [users.data];
              // console.log(testTableauData);
          return testTableauData.filter(user => user.id === userId);
      }
  }

    async getActivity(userId, url) {
        if (this.isMocked) {
            console.log("test Mocked Activity");
            let activities = await axios.get(url + "/datasMocked.json")
                .then(reponse => reponse.data.activity);
            return activities.filter(activity => activity.userId === userId);
        } 
        else {
            console.log("test Backend Activity");
            let activities = await axios.get(`http://localhost:3000/user/${userId}/activity`)
                .then(reponse => reponse.data);
                let testTableauData = [activities.data];
              // console.log(testTableauData);
            return testTableauData.filter(activity => activity.userId === userId);
        } 
    }

    async getSessions(userId, url) {
      if (this.isMocked) {
        console.log("test Mocked Sessions")
          let sessions = await axios.get(url + "/datasMocked.json")
              .then(reponse => reponse.data.sessions); 
         return sessions.filter(session => session.userId === userId);
      }
      else {
          console.log("test Backend Sessions");
          let sessions = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
                .then(reponse => reponse.data);
                let testTableauData = [sessions.data];
              // console.log(testTableauData);
            return testTableauData.filter(session => session.userId === userId);
      } 
  }

  async getPerf(userId, url) {
   if (this.isMocked) {
    console.log("test Mocked Performances")
      let performances = await axios.get(url + "/datasMocked.json")
      .then(response => response.data.perf);
      // console.log(performances);
      return performances.filter(performance => performance.userId === userId);
   }
   else {
       console.log("test Backend Performances");
       let performances = await axios.get(`http://localhost:3000/user/${userId}/performance`)
                .then(reponse => reponse.data);
                let testTableauData = [performances.data];
              // console.log(testTableauData);
            return testTableauData.filter(performance => performance.userId === userId);
   } 
  }

}