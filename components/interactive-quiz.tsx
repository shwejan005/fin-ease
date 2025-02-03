"use client"

import { useState } from "react"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface Question {
  question: string
  options: string[]
  correctAnswer: number
}

interface QuizProps {
  title: string
  questions: Question[]
}

export function InteractiveQuiz({ title, questions }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const handleAnswer = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setShowResult(true)
  }

  const nextQuestion = () => {
    setSelectedAnswer(null)
    setShowResult(false)
    setCurrentQuestion(currentQuestion + 1)
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
  }

  return (
    <Card className="border-green-400/20 bg-green-50/50">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-green-800">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {currentQuestion < questions.length ? (
          <div className="space-y-4">
            <p className="text-gray-600">{questions[currentQuestion].question}</p>
            <RadioGroup
              value={selectedAnswer?.toString()}
              onValueChange={(value) => setSelectedAnswer(Number.parseInt(value))}
            >
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`}>{option}</Label>
                </div>
              ))}
            </RadioGroup>
            {!showResult ? (
              <Button
                onClick={handleAnswer}
                disabled={selectedAnswer === null}
                className="bg-green-600 hover:bg-green-700"
              >
                Check Answer
              </Button>
            ) : (
              <div className="space-y-4">
                <div
                  className={`flex items-center gap-2 rounded-lg p-2 ${
                    selectedAnswer === questions[currentQuestion].correctAnswer
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {selectedAnswer === questions[currentQuestion].correctAnswer ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <X className="h-5 w-5" />
                  )}
                  {selectedAnswer === questions[currentQuestion].correctAnswer ? "Correct!" : "Incorrect. Try again!"}
                </div>
                <Button onClick={nextQuestion} className="bg-green-600 hover:bg-green-700">
                  Next Question
                </Button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4 text-center">
            <h3 className="text-xl font-medium text-green-800">Quiz Complete!</h3>
            <p className="text-gray-600">
              You scored {score} out of {questions.length}
            </p>
            <Button onClick={resetQuiz} className="bg-green-600 hover:bg-green-700">
              Try Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

