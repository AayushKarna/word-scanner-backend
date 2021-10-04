const axios = require('axios');

const AppError = require('./../utils/appError');
const catchAsync = require('./../utils/catchAsync');
const isStringPresnet = require('../utils/isPresnetStrArr');

exports.getSites = catchAsync(async (req, res, next) => {
  const { websiteList, keywords } = req.body;

  const result = [];

  // sitename -> true

  await Promise.all(
    websiteList.map(async el => {
      const { data } = await axios.get(el);

      if (isStringPresnet(data, keywords)) {
        result.push({
          site: el,
          isPresent: true
        });
      } else {
        result.push({
          site: el,
          isPresent: false
        });
      }
    })
  );

  res.status(200).json({
    status: 'success',
    data: {
      data: result
    }
  });
});
