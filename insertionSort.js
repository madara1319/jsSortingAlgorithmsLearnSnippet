//My attemp at writing insertionSort

const array = [5, 1, 23, 6, 33, 11, 2, 6, 13, 9]

const insertionSort = (array) => {
    // Zaczynamy od drugiego elementu (indeks 1),
    // ponieważ pierwszy jest już "posortowany".
    for (let i = 1; i < array.length; i++) {
        // Zapisujemy bieżący element
        // (do którego będziemy szukać odpowiedniego miejsca).
        let temp_value = array[i];
        // Przechowujemy indeks elementu poprzedzającego bieżący.
        let position = i - 1;

        // Pętla while przesuwa elementy w prawo,
        // aż znajdziemy odpowiednie miejsce dla temp_value.
        while (position >= 0) {
            // Jeśli element w tablicy (na pozycji 'position') jest większy od temp_value,
            // to przesuwamy go o jedno miejsce w prawo, aby zrobić miejsce dla temp_value.
            if (array[position] > temp_value) {
                array[position + 1] = array[position];
                // Przechodzimy do poprzedniego elementu (zmniejszamy position).
                position = position - 1;
                console.log(`temp_value ${temp_value} i position ${position}`);
            }
            // Jeśli znaleźliśmy miejsce dla temp_value (element w tablicy jest mniejszy lub równy),
            // kończymy przesuwanie elementów.
            else {
                break;
            }
        }
        // Po zakończeniu pętli, wstawiamy temp_value w odpowiednie miejsce w posortowanej części tablicy.
        array[position + 1] = temp_value;
    }

    // Zwracamy posortowaną tablicę.
    return array;
}

console.log(array)
insertionSort(array)
console.log(array)
