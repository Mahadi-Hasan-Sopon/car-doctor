function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-primary-orange"></div>
    </div>
  );
}

export default LoadingSpinner;
