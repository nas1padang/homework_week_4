// Pembuatan Array, ArrayGanjil, ArrayGenap

createArray = () => {

    let randomArray = [];
    let evenArray = [];
    let oddArray = [];

    for (let i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 50) + 1;
        randomArray.push(random);

        if (i % 2 === 0) {
            evenArray.push(random);
        } else {
            oddArray.push(random);
        }
    }
    
    return { randomArray, evenArray, oddArray };
}

// Cari Nilai Terkecil
const findMin = arr => {
    let min = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i]
        }
    }
    
    return min
}

// Cari Nilai Terbesar
const findMax = arr => {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max){
            max = arr[i]
        }
    }
    
    return max
}

// Cari Penjumlahan
const sumOfArray = arr => {
    let total = 0
    for(let i=0; i<arr.length; i++){
        total += arr[i]
    }
    return total
}

// Cari Rata-rata
const avgOfArray = arr => sumOfArray(arr)/arr.length

// Komparasi Ganjil dan Genap
const compareTwoVar = (evenVar, oddVar, name) => {
    if (evenVar === oddVar){
        return name + ' memiliki nilai sama antara array genap dan ganjil'
    }else if(evenVar > oddVar){
        return name +' lebih besar array ganjil'
    }else{
        return name + ' lebih besar array genap'
    }
}

// Buat Array
const { randomArray, evenArray, oddArray } = createArray()

// Tampilkan isi Array
console.log("array acak : ", randomArray)
console.log("array ganjil : ", evenArray)
console.log("array genap :", oddArray)

// bandingkan array
compareMin = compareTwoVar(findMin(evenArray), findMin(oddArray),'Min')
compareMax = compareTwoVar(findMax(evenArray), findMax(oddArray),'Max')
compareSum = compareTwoVar(sumOfArray(evenArray), sumOfArray(oddArray),'Total')
compareAvg = compareTwoVar(avgOfArray(evenArray), avgOfArray(oddArray),'Rata-rata')

// nilai min
console.log("Nilai Min pada array ganjil :", findMin(evenArray), ", pada array genap :",findMin(oddArray))
console.log(compareMin)

// nilai max
console.log("Nilai Max pada array ganjil :", findMax(evenArray), ", pada array genap :",findMax(oddArray))
console.log(compareMax)

// penjumlahan
console.log("Total pada array ganjil :", sumOfArray(evenArray), ", pada array genap :",sumOfArray(oddArray))
console.log(compareSum)

// rata-rata
console.log("Rata-rata pada array ganjil :", avgOfArray(evenArray), ", pada array genap :",avgOfArray(oddArray))
console.log(compareAvg)