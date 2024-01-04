import axios from "axios";


export class DataService {

  constructor(etatBouton) {
    if (etatBouton === "Data Mocked") {
      this.isMocked = true;
    }
    else {
      this.isMocked = false;
    }
  }

  async getUser(userId) {
    if (this.isMocked) {
      console.log("test Mocked Users")
      let users = await axios.get("http://localhost:3001/datasMocked.json")
        .then(reponse => reponse.data.users);
      return users.filter(user => user.id === userId);
    }
    else {
      console.log("test Backend Users")
      let users = await axios.get(`http://localhost:3000/user/${userId}`)
        .then(reponse => reponse.data);
      let testTableauData = [users.data];
      return testTableauData.filter(user => user.id === userId);
    }
  }

  async getActivity(userId) {
    if (this.isMocked) {
      console.log("test Mocked Activity");
      let activities = await axios.get( "http://localhost:3001/datasMocked.json")
        .then(reponse => reponse.data.activity);
      return activities.filter(activity => activity.userId === userId);
    }
    else {
      console.log("test Backend Activity");
      let activities = await axios.get(`http://localhost:3000/user/${userId}/activity`)
        .then(reponse => reponse.data);
      let testTableauData = [activities.data];
      return testTableauData.filter(activity => activity.userId === userId);
    }
  }

  async getSessions(userId) {
    if (this.isMocked) {
      console.log("test Mocked Sessions")
      let sessions = await axios.get("http://localhost:3001/datasMocked.json")
        .then(reponse => reponse.data.sessions);
      return sessions.filter(session => session.userId === userId);
    }
    else {
      console.log("test Backend Sessions");
      let sessions = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`)
        .then(reponse => reponse.data);
      let testTableauData = [sessions.data];
      return testTableauData.filter(session => session.userId === userId);
    }
  }

  async getPerf(userId) {
    if (this.isMocked) {
      console.log("test Mocked Performances")
      let performances = await axios.get("http://localhost:3001/datasMocked.json")
        .then(response => response.data.perf);
      return performances.filter(performance => performance.userId === userId);
    }
    else {
      console.log("test Backend Performances");
      let performances = await axios.get(`http://localhost:3000/user/${userId}/performance`)
        .then(reponse => reponse.data);
      let testTableauData = [performances.data];
      return testTableauData.filter(performance => performance.userId === userId);
    }
  }

}