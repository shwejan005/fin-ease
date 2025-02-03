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
    easy: "bg-green-100 text-green-800",
    medium: "bg-yellow-100 text-yellow-800",
    hard: "bg-red-100 text-red-800",
  }

  return (
    <Card className="border-green-100">
      <CardHeader>
        <div className="flex items-start justify-between">
          <CardTitle className="text-xl text-green-800">{title}</CardTitle>
          <Badge className={difficultyColors[difficulty]}>
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600">{description}</p>
        {tips && tips.length > 0 && (
          <div className="rounded-lg bg-green-50 p-4">
            <h4 className="mb-2 font-medium text-green-800">Remember:</h4>
            <ul className="ml-4 list-disc space-y-1 text-green-600">
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

