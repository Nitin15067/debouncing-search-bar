let counter = 0;
let delayInit = 300;
let delay = 0;
let delayTimer = null;
let delayInput = document.getElementById('delay');
let result = document.getElementById('result');

const getData = () => {
    result.innerText =  ++counter + ". Fetching Data.";
}

const debounce = function (fn, d) {
    clearTimeout(delayTimer);
    delayTimer = setTimeout(() => {
        fn();
    }, d);
}


const setDelay = () => {
    console.log("Set Delay Invoked");
    delay = delayInput.value;
}
const getDelay = () => {
    console.log("Get Delay Invoked");
    return delay;
}
const resetDelay = () => {
    console.log("Reset Delay Invoked");
    delay = delayInit;
    delayInput.value = delay;
}
resetDelay();

const search = () => {
    debounce(getData, delay = getDelay());
}
