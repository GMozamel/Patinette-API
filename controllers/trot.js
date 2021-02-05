const Trot = require('../models/trot');
const crypto = require('crypto');
const QRcode = require('qrcode');


module.exports = {
    create: async (request,reply) => {
        try {
            const trot = request.body;
            trot.qrcode = await generateQR(crypto.randomBytes(16).toString("hex"));
            const newTrot = await Trot.create(trot);

            reply.code(201).send(newTrot);
        }catch (err){
            reply.code(500).send(err);
        }
    },

    fetch: async (request, reply) => {
        try {
            const trots = await Trot.find({});
            reply.code(200).send(trots);
        } catch (err){
            reply.code(500).send(err);
        }
    },

    update: async (request, reply) => {
        try {
            const trotId = request.params.id;
            const updates = request.body;

            await Trot.findByIdAndUpdate(trotId, updates);
            const trotUpdated = await Trot.findById(trotId);

            reply.code(200).send({ date: trotUpdated});
        } catch (err){
            reply.code(500).send(err);
        }
    }
};

const generateQR = async data => {
    try {
        const qrcode = await QRcode.toDataURL(data);
        return qrcode;
    }catch (err) {
        throw new Error(err);
    }
}