const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex gap-1 items-end">
        <div className="w-3 h-8 bg-blue-600 rounded-sm animate-[loading_0.8s_ease-in-out_infinite] [animation-delay:0s]" />
        <div className="w-3 h-8 bg-blue-600 rounded-sm animate-[loading_0.8s_ease-in-out_infinite] [animation-delay:0.16s]" />
        <div className="w-3 h-8 bg-blue-600 rounded-sm animate-[loading_0.8s_ease-in-out_infinite] [animation-delay:0.32s]" />
      </div>

      <style>{`
        @keyframes loading {
          0%, 80%, 100% { opacity: 0.75; height: 32px; }
          40% { opacity: 1; height: 40px; }
        }
      `}</style>
    </div>
  );
};

export default Loader;