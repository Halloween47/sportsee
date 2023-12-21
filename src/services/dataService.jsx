import axios from "axios"

export class DataService {

    isMocked = true;

    getActivity(userId) {
        if (this.isMocked) {
            return (
                [
                    {
                        "day": "2020-07-01",
                        "kilogram": 80,
                        "calories": 240
                    },
                    {
                        "day": "2020-07-02",
                        "kilogram": 80,
                        "calories": 220
                    },
                    {
                        "day": "2020-07-03",
                        "kilogram": 81,
                        "calories": 280
                    },
                    {
                        "day": "2020-07-04",
                        "kilogram": 81,
                        "calories": 290
                    },
                    {
                        "day": "2020-07-05",
                        "kilogram": 80,
                        "calories": 160
                    },
                    {
                        "day": "2020-07-06",
                        "kilogram": 78,
                        "calories": 162
                    },
                    {
                        "day": "2020-07-07",
                        "kilogram": 76,
                        "calories": 390
                    }
                ])
        } else {
            //TODO: faire l'implementation
            return null;
        }
    }
    getSessions(userId) {
        if (this.isMocked) {
            return ([
                {
                    "day": 1,
                    "sessionLength": 30
                },
                {
                    "day": 2,
                    "sessionLength": 23
                },
                {
                    "day": 3,
                    "sessionLength": 45
                },
                {
                    "day": 4,
                    "sessionLength": 50
                },
                {
                    "day": 5,
                    "sessionLength": 0
                },
                {
                    "day": 6,
                    "sessionLength": 0
                },
                {
                    "day": 7,
                    "sessionLength": 60
                }
            ])
        }
        else {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
                console.log(response.data.data);
                return response.data.data;
            } catch (error) {
                throw error;
            }
        }
    }

    getPerf(userId) {
        if (this.isMocked) {
            return ([
                {
                    "value": 80,
                    "kind": 1,
                    "name": "cardio"
                },
                {
                    "value": 120,
                    "kind": 2,
                    "name": "energy"
                },
                {
                    "value": 140,
                    "kind": 3,
                    "name": "endurance"
                },
                {
                    "value": 50,
                    "kind": 4,
                    "name": "strength",
                },
                {
                    "value": 200,
                    "kind": 5,
                    "name": "speed",
                },
                {
                    "value": 90,
                    "kind": 6,
                    "name": "intensity"
                }
            ])
        }
        else {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}/performance`);
                console.log(response.data.data);
                return response.data.data;
            } catch (error) {
                throw error;
            }
        }
    }

    getUser(userId) {
        if (this.isMocked) {
            return ([
                {
                    "id": 12,
                    "userInfos": {
                        "firstName": "Karl",
                        "lastName": "Dovineau",
                        "age": 31
                    },
                    "todayScore": 0.12 * 100,
                    "keyData": {
                        "calorieCount": 1930,
                        "proteinCount": 155,
                        "carbohydrateCount": 290,
                        "lipidCount": 50
                    }
                }
            ])
        }
        else {
            try {
                const response = await axios.get(`http://localhost:3000/user/${userId}`);
                console.log(response.data.data);
                return response.data.data;
            } catch (error) {
                throw error;
            }
        }
    }

}