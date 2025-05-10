import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardHeader } from "@/components/ui/card"

export function SettingsSkeleton() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <Skeleton className="h-6 w-24 mb-1" />
          <Skeleton className="h-4 w-64" />
        </CardHeader>
        <div className="border-b border-border">
          <div className="flex overflow-x-auto px-4">
            <Skeleton className="h-10 w-20 mx-2" />
            <Skeleton className="h-10 w-28 mx-2" />
            <Skeleton className="h-10 w-20 mx-2" />
          </div>
        </div>
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="flex flex-col items-center p-6 border border-border rounded-lg">
                <Skeleton className="h-24 w-24 rounded-full mb-4" />
                <Skeleton className="h-5 w-32 mb-2" />
                <Skeleton className="h-4 w-16 mb-1" />
                <Skeleton className="h-4 w-40 mb-4" />
                <Skeleton className="h-10 w-full" />
              </div>
            </div>
            <div className="md:w-2/3 space-y-4">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Skeleton className="h-4 w-20 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-16 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div>
                  <Skeleton className="h-4 w-24 mb-2" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              <div>
                <Skeleton className="h-4 w-12 mb-2" />
                <Skeleton className="h-24 w-full" />
              </div>
              <div className="flex justify-end">
                <Skeleton className="h-10 w-32" />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
