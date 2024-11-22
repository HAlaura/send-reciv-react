const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

let archivedRecords = []; // مصفوفة لتخزين السجلات المؤرشفة

// نقطة نهاية لإضافة سجل جديد إلى الأرشيف
app.post('/archive/', (req, res) => {
  const newRecord = {
    id: archivedRecords.length + 1, // توليد ID جديد
    title: req.body.title,
    sender: req.body.sender,
    notes: req.body.notes,
    urgency: req.body.urgency,
    number: req.body.number,
    date: req.body.date,
  };

  archivedRecords.push(newRecord);
  res.status(201).json(newRecord); // إرسال السجل الجديد كاستجابة
});

// نقطة نهاية لجلب السجلات المؤرشفة
app.get('/archive/', (req, res) => {
  res.json(archivedRecords); // إرسال جميع السجلات المؤرشفة
});

// نقطة نهاية لحذف سجل مؤرشف
app.delete('/archive/:id', (req, res) => {
  const recordId = parseInt(req.params.id);
  archivedRecords = archivedRecords.filter(record => record.id !== recordId);
  res.status(204).send(); // إرسال استجابة 204 بدون محتوى
});

// إعداد الخادم للاستماع على منفذ معين
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
