'use strict';

module.exports.weather = async (event,context,callback) => {
  let zipcode = " "
  console.log(event);
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        zipcode: "23421",
        message: 'The weather in zip code' + zipcode + 'is 0, dress warm.',
      }),
  };
  callback(null,response);
};


