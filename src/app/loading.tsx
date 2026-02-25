export default function RootLoading() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 rounded-full border-2 border-[#0A84FF] border-t-transparent animate-spin" />
        <p className="text-[#6E6E73] text-sm">Carregando...</p>
      </div>
    </div>
  );
}
