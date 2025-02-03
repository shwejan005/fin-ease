"use client"

import { useState } from "react"
import { Check, X, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface Question {
  question: string
  type: "multiple-choice" | "number" | "text"
  options?: string[]
  correctAnswer: string | number
  explanation: string
}

interface PracticeExerciseProps {
  title: string
  description: string
  questions: Question[]
}

export function PracticeExercise({ title, description, questions }: PracticeExerciseProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answer, setAnswer] = useState<string | number>("")
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [complete, setComplete] = useState(false)

  const handleSubmit = () => {
    if (!showResult) {
      const isCorrect = answer === questions[currentQuestion].correctAnswer
      if (isCorrect) setScore(score + 1)
      setShowResult(true)
    } else {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setAnswer("")
        setShowResult(false)
      } else {
        setComplete(true)
      }
    }
  }

  const renderQuestion = () => {
    const question = questions[currentQuestion]

    switch (question.type) {
      case "multiple-choice":
        return (
          <RadioGroup value={answer.toString()} onValueChange={setAnswer}>
            {question.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        )
      case "number":
        return (
          <Input
            type="number"
            value={answer.toString()}
            onChange={(e) => setAnswer(Number(e.target.value))}
            placeholder="Enter your answer"
          />
        )
      case "text":
        return (
          <Input
            type="text"
            value={answer.toString()}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Enter your answer"
          />
        )
    }
  }

  if (complete) {
    return (
      <Card className="border-green-100">
        <CardContent className="pt-6">
          <div className="text-center">
            <Trophy className="mx-auto h-12 w-12 text-green-600" />
            <h3 className="mt-4 text-xl font-semibold text-green-800">Exercise Complete!</h3>
            <p className="mt-2 text-gray-600">
              You scored {score} out of {questions.length}
            </p>
            <Button
              onClick={() => {
                setCurrentQuestion(0)
                setAnswer("")
                setShowResult(false)
                setScore(0)
                setComplete(false)
              }}
              className="mt-4 bg-green-600 hover:bg-green-700"
            >
              Try Again
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-green-100">
      <CardHeader>
        <CardTitle className="text-xl text-green-800">{title}</CardTitle>
        <p className="text-gray-600">{description}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-green-800">
              Question {currentQuestion + 1} of {questions.length}
            </h4>
            <p className="mt-2 text-gray-600">{questions[currentQuestion].question}</p>
          </div>

          <div className="space-y-4">
            {renderQuestion()}

            {showResult && (
              <div
                className={`flex items-center gap-2 rounded-lg p-4 ${
                  answer === questions[currentQuestion].correctAnswer
                    ? "bg-green-50 text-green-800"
                    : "bg-red-50 text-red-800"
                }`}
              >
                {answer === questions[currentQuestion].correctAnswer ? (
                  <Check className="h-5 w-5" />
                ) : (
                  <X className="h-5 w-5" />
                )}
                <div>
                  <p className="font-medium">
                    {answer === questions[currentQuestion].correctAnswer ? "Correct!" : "Incorrect"}
                  </p>
                  <p className="mt-1 text-sm">{questions[currentQuestion].explanation}</p>
                </div>
              </div>
            )}

            <Button onClick={handleSubmit} className="w-full bg-green-600 hover:bg-green-700" disabled={answer === ""}>
              {showResult
                ? currentQuestion < questions.length - 1
                  ? "Next Question"
                  : "Complete Exercise"
                : "Check Answer"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

