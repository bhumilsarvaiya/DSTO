function convertData(value, from, to) {
  switch(from){
    case 'cm':
    case '\'':
      switch(to){
        case 'm':
          return value/100;
          break;
        case 'km':
          return value/100000;
          break;
        case 'ft':
          return value*0.032808;
          break;
        case 'in':
          return value*0.39370;
          break;
        case 'cm':
          return value;
          break;
      };
      break;
    case 'm':
      switch(to){
        case 'cm':
          return value/0.01;
          break;
        case 'km':
          return value/1000;
          break;
        case 'ft':
          return value*3.2808;
          break;
        case 'in':
          return value*39.370;
          break;
        case 'm':
          return value;
          break;
      };
      break;
    case 'km':
      switch(to){
        case 'cm':
          return value*100000;
          break;
        case 'm':
          return value*1000;
          break;
        case 'ft':
          return value*3280.8;
          break;
        case 'in':
          return value*39370;
          break;
        case 'km':
          return value;
          break;
      };
      break;
    case 'ft':
      switch(to){
        case 'cm':
          return value/0.032808;
          break;
        case 'm':
          return value/3.2808;
          break;
        case 'km':
          return value/3280.8;
          break;
        case 'in':
          return value*12;
          break;
        case 'ft':
          return value;
          break;
      };
      break;
    case 'in':
    case '"':
      switch(to){
        case 'cm':
          return value/0.39370;
          break;
        case 'm':
          return value/39.370;
          break;
        case 'km':
          return value/39370;
          break;
        case 'ft':
          return value*0.083333;
          break;
        case 'in':
          return value;
          break;
      };
      break;
  };
}

module.exports.convert = function(input){
  var str = input.split(' ')[0];
  var required_format = input.split(' ')[1];;
  var available = ['cm','ft','in','m','km', '\'','"'];
  var str2 = str.split('x');
  var output = {
    data: [],
    format: required_format
  };
  for(var j in str2){
    temp = str2[j].match(/[a-zA-Z]+|"|'|^(\d+\.\d+|\d+)/g);
    output.data.push(convertData(parseFloat(temp[0]),temp[1],required_format));
  }
  return output;
};