import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: 
  { type: String, 
    required: true, 
    unique: true 
},
  password_hash: 
  { type: String,
     required: true 
    },
  email:
   { type: String,
     required: true, 
     unique: true 
    },
  role: 
  { type: String, 
    required: true,
     enum: ['Admin', 'Operator'] 
    },
  last_login: { type: Date },
  created_at: { type: Date, default: Date.now },
  is_active: { type: Boolean, default: true }
});

export default mongoose.model('User', UserSchema, "users");