import { Quote } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StoryCardProps {
  title: string
  story: string
  moral?: string
}

export function StoryCard({ title, story, moral }: StoryCardProps) {
  return (
    <Card className="border-green-600/20 bg-accent dark:border-green-400/20">
      <CardHeader className="flex flex-row items-center gap-2">
        <Quote className="h-5 w-5 text-green-600 dark:text-green-400" />
        <CardTitle className="text-lg font-medium text-foreground">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{story}</p>
        {moral && <p className="mt-4 font-medium text-green-600 dark:text-green-400">Lesson: {moral}</p>}
      </CardContent>
    </Card>
  )
}

