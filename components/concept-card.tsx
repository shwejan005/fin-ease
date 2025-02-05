import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ConceptCardProps {
  title: string
  description: string
  tips?: string[]
  difficulty: "easy" | "medium" | "hard"
}

export function ConceptCard({ title, description, tips, difficulty }: ConceptCardProps) {
  const difficultyColors = {
    easy: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
    medium: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
    hard: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  }

  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl text-foreground">{title}</CardTitle>
          <Badge className={difficultyColors[difficulty]}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        {tips && tips.length > 0 && (
          <div className="rounded-lg bg-accent p-4">
            <h4 className="mb-2 font-medium text-foreground">Remember:</h4>
            <ul className="ml-4 list-disc space-y-1 text-muted-foreground">
              {tips.map((tip, index) => (
                <li key={index}>{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

