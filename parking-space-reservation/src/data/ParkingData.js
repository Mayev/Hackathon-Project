import axios from 'axios';

function getParkingSpots() {
    return new Promise((resolve, reject) => {
        axios.get("")
            .then(results => {
                const parking_spots = results.data.map(element => {
                    return element;
                });
                resolve(parking_spots);
            })
            .catch(error => {
                console.log(error);
                reject();
            })
    });
}

function getCars() {

}

function getEmployees() {

}

function getDate() {
     
}

export default { getParkingSpots, getEmployees, getCars, getDate };