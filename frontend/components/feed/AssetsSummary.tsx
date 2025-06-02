import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Asset {
  id: string;
  label: string;
  value: number | string;
}

interface AssetsSummaryProps {
  assets: Asset[];
}

export const AssetsSummary = ({ assets }: AssetsSummaryProps) => {
  return (
    <Card className="bg-[#1a1a1a] border-gray-800">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">Your Assets</h3>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {assets.map((asset) => (
            <div key={asset.id} className="flex items-center justify-between">
              <span className="text-gray-400">{asset.label}</span>
              <span className="font-semibold">{asset.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
} 