export function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center py-12">
      <div className="flex items-center gap-3">
        <div className="border-2 border-primary border-t-transparent rounded-full w-6 h-6 animate-spin"></div>
        <span className="text-muted-foreground">Carregando...</span>
      </div>
    </div>
  )
}
