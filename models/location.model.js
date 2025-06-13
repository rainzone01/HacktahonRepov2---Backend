import mongoose from 'mongoose';

const LocationSchema = new mongoose.Schema({
  location_name:
   { type: String, 
    required: true 
},
  address: 
  { type: String, 
    required: true
 },
  room_number:
   { type: String, 
    required: true 
},
  capacity: 
  { type: Number, 
    required: true 
},
  coordinates: 
  {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true  }
  },
  is_active: { type: Boolean, default: true }
});

export default mongoose.model("Location", LocationSchema, "location");
