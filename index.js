// Code your solution here


function findMatching(names, string) {
    return names.filter(
        (letters) => letters.toLowerCase() === string.toLowerCase()
    );
}

// function fuzzyMatch(names,provided) {
//     return names.filter(
//         (possible) => 
// possible.toLowercase().indexOf(provided.toLowercase()) === 0
//     );
// }


function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }

function matchName(names, string) {
 return names.filter((record) => record.name === string);
}
