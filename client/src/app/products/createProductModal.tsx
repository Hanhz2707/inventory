import React from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import Header from "../components/header";

interface ProductFormData {
  name: string;
  price: number;
  stockQuantity: number;
  rating: number;
}

interface createProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (formData: ProductFormData) => void;
}

const createProductModal = ({
  isOpen,
  onClose,
  onCreate,
}: createProductModalProps) => {
  const { register } = useForm();

  const [formData, setFormData] = React.useState({
    productId: v4(),
    name: "",
    price: 0,
    stockQuantity: 0,
    rating: 0,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "price" || name === "stockQuantity" || name === "rating"
          ? parseFloat(value)
          : value,
    }));
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-20">
      <div className="bg-white w-96 p-6 rounded-lg shadow-lg">
        <Header name="Create Product" />
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Input Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Product Name
            </label>
            <input
              {...register("name")}
              id="name"
              placeholder="Enter product name"
              onChange={handleChange}
              value={formData.name}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              {...register("price")}
              id="name"
              placeholder="Enter first name"
              onChange={handleChange}
              value={formData.price}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Stock Quantity
            </label>
            <input
              {...register("stockQuantity")}
              id="name"
              placeholder="Enter first name"
              onChange={handleChange}
              value={formData.stockQuantity}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              {...register("rating")}
              type="number"
              id="name"
              placeholder="Enter first name"
              onChange={handleChange}
              value={formData.rating}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Select Dropdown */}
          <div>
            <label
              htmlFor="options"
              className="block text-sm font-medium text-gray-700"
            >
              Options
            </label>
            <select
              id="options"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              <option value="">Choose your...</option>
              <option value="Man">Man</option>
              <option value="Woman">Woman</option>
              <option value="Children">Children</option>
              <option value="Unisex">Unisex</option>
            </select>
          </div>

          {/* Textarea */}
          <div>
            <label
              htmlFor="about"
              className="block text-sm font-medium text-gray-700"
            >
              Description (optional)
            </label>
            <textarea
              id="about"
              placeholder="Write something for your product..."
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          </div>

          {/* Other Information */}
          <p className="text-sm text-gray-600 items-center ">
            &copy; 2025 BitisHunterFI
          </p>

          {/* Submit Button */}
          <div className="flex space-x-4 justify-center">
            {/* Cancel Button */}
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md shadow-md hover:bg-gray-400 focus:ring-2 focus:ring-gray-500 focus:outline-none transition duration-200"
            >
              Cancel
            </button>

            {/* Create Button */}
            <button
              type="submit"
              className="px-4 py-2 text-white bg-gray-800 rounded-md shadow-md hover:bg-gray-700 focus:ring-2 focus:ring-gray-600 focus:outline-none transition duration-200"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default createProductModal;
