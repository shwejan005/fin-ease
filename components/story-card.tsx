import { Quote } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface StoryCardProps {
  title: string
  story: string
  moral?: string
}

export function StoryCard({ title, story, moral }: StoryCardProps) {
  return (
    <Card className="border-green-400/20 bg-green-50/50">
      <CardHeader className="flex flex-row items-center gap-2">
        <Quote className="h-5 w-5 text-green-600" />
        <CardTitle className="text-lg font-medium text-green-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{story}</p>
        {moral && <p className="mt-4 font-medium text-green-700">सीख (Lesson): {moral}</p>}
      </CardContent>
    </Card>
  )
}