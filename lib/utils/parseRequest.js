module.exports = rawRequest => {
  const stringified = rawRequest.toString();
  const data = stringified.split(' ');
  const body = data[4].split('\r\n');
  
  return {
    method: data[0],
    path: data[1],
    body: body[2]
  };

  
};
