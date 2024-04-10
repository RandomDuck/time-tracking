import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  since: {
    type: Date,
    default: Date.now
  },
  address: {
    stype: String,
    default: '',
  },
  street: {
    stype: String,
    default: '',
  },
  suite: {
    stype: String,
    default: '',
  },
  city: {
    stype: String,
    default: '',
  },
  zipcode: {
    stype: String,
    default: '',
  },
  geo: {
    lat: {
      stype: String,
      default: '',
    },
    lng: {
      stype: String,
      default: '',
    },
  },
  phone: {
    stype: String,
    default: '',
  },
  website: {
    stype: String,
    default: '',
  },
  company: {
    name: {
      stype: String,
      default: '',
    },
    catchPhrase: {
      stype: String,
      default: '',
    },
    bs: {
      stype: String,
      default: '',
    },
  }
});

var User = mongoose.models.User || mongoose.model('User', user);

export default User;
