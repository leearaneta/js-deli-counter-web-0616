var katzDeliLine = []

function takeANumber(line, name) {
  line.push(name)
  var number = line.length
  return `Welcome, ${name}. You are number ${number} in line.`
}

function nowServing(line) {
  if (line == false) {
    return 'There is nobody waiting to be served!'
  } else {
    return `Currently serving ${line.shift()}.`
  }
}

function currentLine(line) {
  // debugger
  var string = "The line is currently"
  if (line == false) {
    string += " empty."
  } else {
    string += ": "
    for (var x = 0; x < line.length; x++) {
      string += `${x + 1}. ${line[x]}, `
    }
    string = string.slice(0, string.length - 2)
  }
  return string
}
