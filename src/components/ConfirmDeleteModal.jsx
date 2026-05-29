"use client";

import { motion } from "framer-motion";
import { Trash2, X } from "lucide-react";

const ConfirmDeleteModal = ({ onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6 text-center"
      >
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Trash2 size={28} className="text-red-500" />
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Delete Car?
        </h2>
        <p className="text-gray-500 mb-6 text-sm">
          Are you sure you want to delete this car listing? This action cannot be undone.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-3 border-2 border-gray-200 text-gray-600 rounded-2xl font-semibold hover:bg-gray-50 transition-all duration-300"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 bg-red-500 text-white rounded-2xl font-semibold hover:bg-red-600 transition-all duration-300 shadow-lg"
          >
            Yes, Delete
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ConfirmDeleteModal;