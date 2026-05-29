const Loading = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="mb-10">
          <div className="h-9 w-48 bg-gray-200 rounded-xl animate-pulse mb-2"></div>
          <div className="h-5 w-64 bg-gray-200 rounded-xl animate-pulse"></div>
        </div>
        <div className="space-y-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm overflow-hidden animate-pulse">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-48 h-40 bg-gray-200"></div>
                <div className="flex-1 p-5 space-y-3">
                  <div className="h-6 bg-gray-200 rounded-xl w-1/2"></div>
                  <div className="h-4 bg-gray-200 rounded-xl w-1/3"></div>
                  <div className="h-4 bg-gray-200 rounded-xl w-full"></div>
                  <div className="h-10 bg-gray-200 rounded-xl w-36"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;