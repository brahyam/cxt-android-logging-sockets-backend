// logs-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const {Schema} = mongooseClient;
  const logs = new Schema({
    data: {type: Buffer},
    contentType: {type: String},
    ticket: {type: String},
    _uploader: {type: Schema.Types.ObjectId, ref: 'user'},
    // ACRA Fields
    androidVersion: {type: String},
    versionCode: {type: String},
    versionName: {type: String},
    deviceId: {type: String},
    installationId: {type: String},
    isSilent: {type: Boolean},
    logCat: {type: String},
    packageName: {type: String},
    phoneModel: {type: String},
    phoneBrand: {type: String},
    reportId: {type: String},
    stackTrace: {type: String},
    userIp: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now}
  });

  return mongooseClient.model('logs', logs);
};
