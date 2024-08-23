// lib/model/image.js
import mongoose from 'mongoose'
const imageSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
},
data: {
    type: Buffer,
    required: true,
},
contentType: {
    type: String,
    required: true,
}
})

const Image = mongoose.models.Image || mongoose.model('Image', imageSchema);

export { Image }