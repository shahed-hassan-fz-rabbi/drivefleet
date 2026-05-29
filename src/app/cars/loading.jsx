const loading = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="h-12 w-64 bg-white/20 rounded-2xl mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 w-48 bg-white/20 rounded-xl mx-auto mb-8 animate-pulse"></div>
          <div className="max-w-xl mx-auto h-14 bg-white/30 rounded-2xl animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm animate-pulse">
              <div className="h-52 bg-gray-200"></div>
              <div className="p-5 space-y-3">
                <div className="h-6 bg-gray-200 rounded-xl w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded-xl w-full"></div>
                <div className="h-4 bg-gray-200 rounded-xl w-2/3"></div>
                <div className="flex justify-between items-center pt-2">
                  <div className="h-8 bg-gray-200 rounded-xl w-20"></div>
                  <div className="h-10 bg-gray-200 rounded-full w-28"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default loading;