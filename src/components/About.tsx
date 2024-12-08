import { Button } from "@/components/ui/button"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About ActionTrack</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              ActionTrack provides a unique combination of browsing and interaction logging in a single, streamlined interface. Whether you're testing usability, conducting research, or creating guides, ActionTrack empowers you to focus on your goals while automatically capturing the details.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <Button className="w-full">Try ActionTrack Now</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

