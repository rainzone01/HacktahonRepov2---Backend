import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema({
  event_id:
   { type: String, 
     required: true,
     unique: true
     },
  title: 
  { type: String,
     required: true 
    },
  description:
   { type: String,
     required: true
     },
  event_date: 
  { type: String, 
    required: true
},
  start_time: 
  { type: String,
     required: true 
    },
  end_time: 
  { type: String,
     required: true 
    },
  location_id: 
  { type: mongoose.Schema.Types.ObjectId,
     ref: 'Location', 
     required: true 
    },
  created_by:
   { type: mongoose.Schema.Types.ObjectId,
     ref: 'User',
      required: true 
    },
  created_at: { type: Date,
     default: Date.now 
    },
  updated_at: 
  { type: Date, 
    default: Date.now 
}
});

export default mongoose.model("Event", EventSchema, "events");
