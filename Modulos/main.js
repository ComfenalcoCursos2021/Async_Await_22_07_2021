const promesa = ({...arg})=>{
    return new Promise((resolve,reject)=>{
        const numbers = [];
        for (let i = 0; i < arg.iterations; i++) {
            const number = 1 + Math.floor(Math.random() * 999);
            numbers.push(number);
            if (number === 999) {
                return resolve({
                    error: true,
                    message: "Se ha sacado un 999"
                });
            }
            if((i+1) == arg.iterations){
                return reject({
                    error: false,
                    value: numbers
                });
            }
        }

        setTimeout(() => {
            return resolve({name: `${arg.id}. ${(arg.name/1000).toFixed(2)} Hola soy la promesa del archivo Modulos/main.js`});
            // return resolve(42);
        }, arg.name);
    })
}
export default promesa;