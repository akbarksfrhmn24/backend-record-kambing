// controllers/goatController.js
const Kambing = require('../models/kambing');

exports.createKambing = async (req, res) => {
    try {
        const { qrCode, name, age, breed } = req.body;
        const newKambing = await Kambing.create({ qrCode, name, age, breed });
        res.status(201).json(newKambing);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getKambing = async (req, res) => {
    try {
        const kambing = await Kambing.findAll();
        res.status(200).json(kambing);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getKambingById = async (req, res) => {
    try {
        const kambing = await Kambing.findByPk(req.params.id);
        if (kambing) {
            res.status(200).json(kambing);
        } else {
            res.status(404).json({ message: 'Goat not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateKambing = async (req, res) => {
    try {
        const { qrCode, name, age, breed } = req.body;
        const [updated] = await Kambing.update({ qrCode, name, age, breed }, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedKambing = await Kambing.findByPk(req.params.id);
            res.status(200).json(updatedKambing);
        } else {
            res.status(404).json({ message: 'Goat not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteKambing = async (req, res) => {
    try {
        const deleted = await Kambing.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Goat not found' });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
