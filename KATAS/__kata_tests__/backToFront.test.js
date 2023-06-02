const backToFront = require('../katas/backToFront.js');

describe.skip('backToFront', () => {
    xtest('should return an empty array when invoked with one', () => {
        expect(backToFront([])).toEqual([]);
    });
    xtest('should return a new array', () => {
        const newArr = [];
        expect(backToFront(newArr)).not.toBe(newArr)
    });
    xtest('when passed an array with a single object, returns a new array with the original object inside', () => {
        const array = [{}]
        const returnedArray = [array[0]]
        expect(backToFront(array)).toEqual(returnedArray)
    });
    xtest('when passed an array with two objects, returns a new array with the original objects inside but flipped positions', () => {
        const array = [{a:1}, {b: 2}]
        const returnedArray = [array[1], array[0]]
        expect(backToFront(array)).toEqual(returnedArray)
    })
    xtest('when passed an array with multiple objects, returns a new array with the original objects inside but the last one at the start', () => {
        const array = [{a: 1}, {b: 2}, {c: 3}];
        const returnedArray = [array[2], array[0], array[1]];
        expect(backToFront(array)).toEqual(returnedArray)
    })
    xtest('should not mutate the original array', () => {
        const array = [{a: 1}, {b: 2}, {c: 3}];
        const arrayCopy = [{a: 1}, {b: 2}, {c: 3}];
        backToFront(array)
        expect(array).toEqual(arrayCopy)
    })
})


