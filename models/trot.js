const mongoose = require('mongoose');
const { Schema } = mongoose;

const trotSchema = new Schema({
    lastPos: {
        lat: {
            type: String,
            required : true
        },
        lng: {
            type: String,
            required: true
        }
    },
    qrcode: {
        type: String,
        required: true
    }
});

const Trot = mongoose.model('trot',trotSchema);

module.exports = Trot;