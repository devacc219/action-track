import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    title: "Live Website Viewer",
    description: "Paste any URL to view the website directly in the interface. Full interactivity with seamless integration for smooth browsing."
  },
  {
    title: "Action Tracking Panel",
    description: "Records every step a user performs on the website. Presents actions as a structured, easy-to-read list or timeline."
  },
  {
    title: "Dynamic Split-Screen Layout",
    description: "Optimized for productivity with a responsive design. Adjustable panel sizes for personalized preferences."
  }
]

export default function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Key Features</h2>
        <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

