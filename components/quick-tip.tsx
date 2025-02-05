import { Lightbulb } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface QuickTipProps {
  title: string
  description: string
}

export function QuickTip({ title, description }: QuickTipProps) {
  return (
    <Alert className="border-green-600/30 bg-accent dark:border-green-400/30">
      <Lightbulb className="h-4 w-4 text-green-600 dark:text-green-400" />
      <AlertTitle className="text-foreground">{title}</AlertTitle>
      <AlertDescription className="text-muted-foreground">{description}</AlertDescription>
    </Alert>
  )
}

