const ResourceFileModel = require('../models/contact.model');

exports.create = async (resourceFile) => {
  const result = await ResourceFileModel.insertMany([resourceFile]);
  return result;
};

exports.read = async () => {
  const result = await ResourceFileModel.find({});
  return result;
};

exports.readByID = async (_id) => {
  const result = await ResourceFileModel.findById({ _id });
  return result;
};

exports.update = async (_id) => {
  const result = await ResourceFileModel.findByIdAndUpdate({ _id });
  return result;
};

exports.deleteByID = async (_id) => {
  await ResourceFileModel.findByIdAndDelete({ _id });
};
