import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5001/'
})

// Gets a list of strings with the name of the files
export function getProcessedFilesNames() {
    api.get('/processed-files-names').then (res => {console.log(res.data)})
}

// Uploads a file to the api
export function postFile(data) {
    let file = {
        "name": "string", // fileName
        "data": "string" // data must be a Base64 encoded string
    };
    api.post('/file', file)
}

// Gets the list of employees in the file
export function getEmployeesInFile(fileName) {
    api.get('/employees-in-file', {params: {fileName} }).then (res => {console.log(res.data)})
}