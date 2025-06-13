// models/log.model.js
import mongoose from 'mongoose';

const LogSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true },
  action: { type: String,
     required: true 
    },
  details: { 
    type: String 
},
  timestamp:
   { type: Date, 
    default: Date.now 
},
  ip_address: { type: String }
});

export default mongoose.model('Log', LogSchema, 'logs');