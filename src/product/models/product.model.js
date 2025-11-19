import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El título es requerido'],
    trim: true,
    maxlength: [200, 'El título no puede exceder 200 caracteres']
  },
  price: {
    type: Number,
    required: [true, 'El precio es requerido'],
    min: [0, 'El precio no puede ser negativo']
  },
  description: {
    type: String,
    required: [true, 'La descripción es requerida'],
    trim: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, 'La categoría es requerida'],
    trim: true,
    lowercase: true
  },
  categorySlug: {
    type: String,
    lowercase: true,
    trim: true
  },
  image: {
    type: String,
    required: [true, 'La imagen es requerida']
  },
  status: {
    type: Boolean,
    default: true
  },
  rating: {
    rate: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    count: {
      type: Number,
      default: 0,
      min: 0
    }
  }
},
  {
    timestamps: true
  }
)

productSchema.index({ category: 1 });
productSchema.index({ categorySlug: 1 });
productSchema.index({ status: 1 });
productSchema.index({ name: 1 });
productSchema.index({ price: 1 });

const ProductModel = mongoose.model("Products", productSchema)

export default ProductModel
