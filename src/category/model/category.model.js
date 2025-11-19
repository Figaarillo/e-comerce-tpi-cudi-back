import { Schema, model } from "mongoose"

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la categoría es requerido'],
    trim: true,
    unique: true,
    maxlength: [100, 'El nombre no puede exceder 100 caracteres']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  description: {
    type: String,
    trim: true,
    maxlength: [500, 'La descripción no puede exceder 500 caracteres']
  },
  image: {
    type: String,
    default: ''
  },
  status: {
    type: Boolean,
    default: true
  }
},
  {
    timestamps: true
  }
);

// Índices para mejorar las búsquedas
categorySchema.index({ slug: 1 });
categorySchema.index({ status: 1 });
categorySchema.index({ name: 1 });

// Middleware para generar slug automáticamente
categorySchema.pre('save', function (next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }
  next();
});

const CategoryModel = mongoose.model("Categories", categorySchema);
export default CategoryModel;
