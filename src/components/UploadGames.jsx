import React, { useState } from 'react';
import { FaUpload, FaImage, FaGamepad, FaGithub } from 'react-icons/fa';
import { GiConsoleController } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

const UploadGameForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    githubLink: '',
    coverImage: null
  });
  const [isUploading, setIsUploading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    // Simulate upload
    setTimeout(() => {
      setIsUploading(false);
      navigate('/'); // Redirect after upload
    }, 2000);
  };

  return (
    <section className="py-2 bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <GiConsoleController className="mx-auto text-5xl text-orange-500 mb-3" />
          <h2 className="text-5xl font-bold font-primary text-white ">UPLOAD YOUR GAME</h2>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#111] rounded-xl p-8 shadow-2xl border border-gray-700">
          {/* Game Title */}
          <div className="mb-6">
            <label className=" text-white text-sm font-medium mb-2 flex items-center">
              <FaGamepad className="mr-2 text-orange-500" />
              Game Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-500"
              placeholder="Enter your game's title"
              required
            />
          </div>

          {/* GitHub Link */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2 flex items-center">
              <FaGithub className="mr-2 text-gray-300" />
              GitHub Repository
            </label>
            <input
              type="url"
              name="githubLink"
              value={formData.githubLink}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-black border border-gray-600 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-500"
              placeholder="https://github.com/yourname/yourgame"
              required
            />
          </div>

          {/* Cover Image Upload */}
          <div className="mb-8">
            <label className="block text-white text-sm font-medium mb-2 flex items-center">
              <FaImage className="mr-2 text-orange-500" />
              Cover Image
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col w-full h-48 border-2 border-dashed border-gray-600 hover:border-orange-500 transition-colors rounded-lg cursor-pointer bg-black hover:bg-[#111]">
                {formData.coverImage ? (
                  <div className="h-full flex items-center justify-center p-2">
                    <img 
                      src={URL.createObjectURL(formData.coverImage)} 
                      alt="Preview" 
                      className="max-h-full max-w-full rounded-md"
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full p-4">
                    <FaUpload className="text-3xl text-gray-500 mb-3" />
                    <p className="text-sm text-gray-400 text-center">
                      Drag & drop or click to upload
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      PNG or JPG (1280×720 recommended)
                    </p>
                  </div>
                )}
                <input 
                  type="file" 
                  name="coverImage"
                  onChange={handleChange}
                  className="opacity-0" 
                  accept="image/png, image/jpeg"
                  required
                />
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isUploading}
            className={`w-full py-3 px-6 rounded-lg font-bold text-black transition-all duration-300 ${
              isUploading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-orange-500 hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30'
            }`}
          >
            {isUploading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                UPLOADING...
              </span>
            ) : (
              'PUBLISH GAME'
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default UploadGameForm;