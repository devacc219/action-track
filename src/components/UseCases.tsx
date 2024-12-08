import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const useCases = [
  {
    title: "Usability Testing",
    description: "Evaluate websites and document navigation issues or user flows."
  },
  {
    title: "Workflow Documentation",
    description: "Record and share step-by-step guides for complex web tasks."
  },
  {
    title: "Education & Training",
    description: "Create interactive lessons with action tracking for hands-on learning."
  },
  {
    title: "Personal Productivity",
    description: "Keep track of your online activities for research or project management."
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Use Cases</h2>
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          {useCases.map((useCase, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{useCase.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

