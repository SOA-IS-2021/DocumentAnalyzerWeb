import axios from 'axios';
import Table from "../components/Table";

const api = axios.create({
    baseURL: 'https://localhost:5001/'
})

export let employeesInFile = {
    documents: [
        { file: 'gg.pdf', employee: 'Manuel'},
        { file: 'hh.docx', employee: 'Juan'} ],
        mode : 'Search Results'}

// Gets a list of strings with the name of the files
export function getProcessedFilesNames() {
    api.get('/processed-files-names').then (res => {
        let files = res.data;
        console.log(files);

        for (let i = 0; i < files.length; i++) {
            getEmployeesInFile(files[i]);
        }
    })
}

// Uploads a file to the api
export function postFile(file) {
    api.post('/file', file)
}

// Gets the list of employees in the file
function getEmployeesInFile(fileName) {
    const table = document.getElementById("documents-table");
    api.get('/employees-in-file', { params: {fileName} }).then (
        res => {
            let employees = res.data;
            console.log(employees);

            employeesInFile.documents = employees;
        })
}