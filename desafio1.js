class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName = () => {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascota =(mascota) => {
        this.mascotas.push(mascota)
    }

    countMascotas = () => {
        return this.mascotas.length;
    }

    addBook =(nombre, autor) =>{
        this.libros.push(
            {
            nombre: nombre, 
            autor: autor
            }
         )
    }

    getBookNames= () => {
        return (this.libros).forEach(libro => {
            console.log(libro.nombre)
        });
    } 
    
}

let usuario1 = new Usuario("Miguel","Zapata");

usuario1.addMascota("Perro");
usuario1.addMascota("Perro");

usuario1.addBook("Historia del Siglo XX", "Eric Hobsbawm");
usuario1.addBook("Revolución y Guerra", "Halperín Donghi");


//console.log(usuario1.getBookNames());

console.log(usuario1.countMascotas())


console.log(usuario1.getFullName());
