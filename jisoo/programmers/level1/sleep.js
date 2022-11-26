function runPromise() {


    const sleep = (wait) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("hello");
            }, wait);
        });
    };


    sleep(1000)
        .then((param) => {
            console.log(param);
            return "world";
        })
        .then((param) => {
            console.log(param);
            return sleep(5000);
        })
        .then(() => {
            console.log('11')
        })
        .then(sleep.bind(this,5000))
        .then((param) => {
            console.log(param)
        })
}

runPromise()