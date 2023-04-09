const testMain  = "desca";
let age = 12;

const LogData = document.getElementById("LogData");
console.log(LogData);

function dataLog() {
    let generation;
    if(age > 10 && age < 18) {
        //kondisi valid
        generation = 'generasi remaja';
    }
    else {
        //kondisi tidak valid
        generation = 'generasi dewasa';
    }
    return LogData.innerHTML = generation;
    // console.log ('Nama ku adalah ${testMain} Usia ${age} Tahun');
}
dataLog();


