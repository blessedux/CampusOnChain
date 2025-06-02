import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Award, Users, UserPlus } from "lucide-react"

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: 'orange' | 'blue' | 'purple' | 'green';
  onClick: () => void;
}

interface NextActionsProps {
  actions: Action[];
}

export const NextActions = ({ actions }: NextActionsProps) => {
  const getButtonClass = (color: Action['color']) => {
    switch (color) {
      case 'orange':
        return 'bg-orange-600 hover:bg-orange-700';
      case 'blue':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'purple':
        return 'bg-purple-600 hover:bg-purple-700';
      case 'green':
        return 'bg-green-600 hover:bg-green-700';
    }
  };

  return (
    <Card className="bg-[#1a1a1a] border-gray-800">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">Next Actions</h3>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action) => (
          <Button
            key={action.id}
            className={`w-full justify-start gap-2 ${getButtonClass(action.color)}`}
            onClick={action.onClick}
          >
            {action.icon}
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
} 