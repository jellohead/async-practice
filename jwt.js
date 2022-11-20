// import jwt_decode from 'jwt-decode';

// let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDc4OCwidHlwZSI6IlVTRVIiLCJzY29wZSI6WyJyZWFkOnBlcnNvbmFsIiwidXBkYXRlOnBlcnNvbmFsIiwicXVlcnk6cGVyc29uYWwiXSwiaWF0IjoxNjY4Nzc5NDg2LCJleHAiOjE2NjkzODQyODYsImlzcyI6ImZsdW1lX29hdXRoIiwic3ViIjoiMjA3ODhLWTQ3NFBMUFRVIn0.PuwHmbF4BXbSlffpa3yw3WkXUxEyvNMJoFcL_Pstqho';

// const decoded = jwt_decode(token);
// console.log(decoded);


let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyMDc4OCwidHlwZSI6IlVTRVIiLCJzY29wZSI6WyJyZWFkOnBlcnNvbmFsIiwidXBkYXRlOnBlcnNvbmFsIiwicXVlcnk6cGVyc29uYWwiXSwiaWF0IjoxNjY4Nzc5NDg2LCJleHAiOjE2NjkzODQyODYsImlzcyI6ImZsdW1lX29hdXRoIiwic3ViIjoiMjA3ODhLWTQ3NFBMUFRVIn0.PuwHmbF4BXbSlffpa3yw3WkXUxEyvNMJoFcL_Pstqho';

function parseJwt(token) {
    var base64Url = token.split('.')[1];
    console.log(base64Url)
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

console.log(parseJwt(token))



let myValue = 'asdfaf.ekdalsf.e.esfess.eqqe'

function splitMyValue(startingString) {
    let mySplitValue = myValue.split('.')[2];
    console.log(mySplitValue);
}

splitMyValue(myValue);