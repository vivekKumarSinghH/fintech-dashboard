// Loading component
export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative h-12 w-12">
        <div className="absolute top-0 left-0 h-full w-full rounded-full border-4 border-t-primary border-r-transparent border-b-transparent border-l-transparent animate-spin"></div>
      </div>
    </div>
  )
}
