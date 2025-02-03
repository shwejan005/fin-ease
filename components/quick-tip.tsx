import { Lightbulb } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface QuickTipProps {
  title: string
  description: string
}

export function QuickTip({ title, description }: QuickTipProps) {
  return (
    <Alert className="border-green-400/30 bg-green-50/50">
      <Lightbulb className="h-4 w-4 text-green-600" />
      <AlertTitle className="text-green-800">{title}</AlertTitle>
      <AlertDescription className="text-gray-600">{description}</AlertDescription>
    </Alert>
  )
}

