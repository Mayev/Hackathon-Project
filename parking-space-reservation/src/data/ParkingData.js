import axios from 'axios';

function getParkingSpots() {
    return new Promise((resolve, reject) => {
        axios.get("https://api.myjson.com/bins/fztvx")
            .then(results => {
                const parking = results.data.map(element => {
                    return element;
                });
                resolve(parking);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getCars() {
    return new Promise((resolve, reject) => {
        axios.get("https://api.myjson.com/bins/rfcp9")
            .then(results => {
                const car = results.data.map(element => {
                    return element;
                });
                resolve(car);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getEmployees() {
    return new Promise((resolve, reject) => {
        axios.get("https://api.myjson.com/bins/14co8t")
            .then(results => {
                const employee = results.data.map(element => {
                    return element;
                });
                resolve(employee);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getDate() {
    return new Promise((resolve, reject) => {
        axios.get("https://api.myjson.com/bins/14xw4t")
            .then(results => {
                const date = results.data.map(element => {
                    return element;
                });
                resolve(date);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function postParking() {
    axios.post("https://api.myjson.com/bins/fztvx", {
        'parkingSpotId': '',
        'number': '',
        'floor': '',
        'building': '',
        'occupied': '',
        'employeeUsing': ''
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

export default { getParkingSpots, getEmployees, getCars, getDate };