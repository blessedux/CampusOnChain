import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Award, Calendar, BookOpen, ArrowRight, Wallet, Shield, Briefcase, School, Code } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold text-xl">Campus on Chain</span>
          </Link>
          <Button>Conectar Wallet</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* 1. Hero Section (Above the Fold) */}
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">🌐 Bridging Students with the Web3 Revolution</h1>
                  <p className="text-xl text-muted-foreground">
                    From classroom to crypto—unlock real-world skills, build with purpose, and join the frontier of Blockchain, AI, and DeFi.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1">
                    Join a Workshop <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" className="gap-1" variant="outline">
                    Partner with Us
                  </Button>
                  <Button size="lg" className="gap-1" variant="outline">
                    Hire Talent
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Campus on Chain Hero"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Problem Section (Why This Matters) */}
        <section className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                🚫 The Disconnect Is Real
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-[800px] mx-auto">
                Universities are rich in knowledge but often disconnected from today's most exciting opportunities in Blockchain, AI, and Web3. Students are left feeling unprepared—and Web3 companies struggle to find aligned, capable talent.
              </p>
            </div>
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <School className="h-12 w-12 text-primary mb-2" />
                <h3 className="text-lg font-bold">Universities</h3>
                <p className="text-center text-muted-foreground">
                  Struggling to keep pace with rapidly evolving Web3 technologies and industry needs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <Users className="h-12 w-12 text-primary mb-2" />
                <h3 className="text-lg font-bold">Students</h3>
                <p className="text-center text-muted-foreground">
                  Eager to learn but lacking practical pathways into blockchain careers.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <Briefcase className="h-12 w-12 text-primary mb-2" />
                <h3 className="text-lg font-bold">Companies</h3>
                <p className="text-center text-muted-foreground">
                  In need of fresh talent but finding few candidates with relevant Web3 experience.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Our Role (The Guide) */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  🧭 We're Here to Bridge the Gap
                </h2>
                <p className="text-lg text-muted-foreground">
                  Campus On Chain partners with universities to bring Web3 education, workshops, and employment pipelines directly to students. We empower academic communities to thrive in the decentralized economy.
                </p>
                <div className="flex items-center space-x-2 pt-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <p className="font-medium">Your trusted guide to the Web3 ecosystem</p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="Campus on Chain as a Guide"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. How It Works (The Plan) */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                📍 From Campus to Protocol in 3 Steps
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-3 rounded-lg border bg-background p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Connect</h3>
                <p className="text-muted-foreground">
                  We host engaging events and expert-led workshops at your university.
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Connect"
                  width={200}
                  height={150}
                  className="rounded-lg object-cover mt-2"
                />
              </div>
              <div className="flex flex-col items-center text-center space-y-3 rounded-lg border bg-background p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Engage</h3>
                <p className="text-muted-foreground">
                  Students gain hands-on experience via hackathons, fellowships, and real-world cases.
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Engage"
                  width={200}
                  height={150}
                  className="rounded-lg object-cover mt-2"
                />
              </div>
              <div className="flex flex-col items-center text-center space-y-3 rounded-lg border bg-background p-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Launch</h3>
                <p className="text-muted-foreground">
                  We help top talent land roles with protocols, DAOs, and Web3 startups.
                </p>
                <Image
                  src="/placeholder.svg?height=150&width=200"
                  alt="Launch"
                  width={200}
                  height={150}
                  className="rounded-lg object-cover mt-2"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Calls to Action */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                ⚡ Take the Next Step
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <School className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">🎓 Are you a university?</h3>
                <p className="text-center text-muted-foreground">
                  Bring cutting-edge Web3 education and opportunities to your campus.
                </p>
                <Button className="w-full">Partner with us</Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">🧑‍🎓 Are you a student?</h3>
                <p className="text-center text-muted-foreground">
                  Start your Web3 journey with expert guidance and real-world projects.
                </p>
                <Button className="w-full">Join our next workshop</Button>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6">
                <Briefcase className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold">🧑‍💼 Are you hiring in Web3?</h3>
                <p className="text-center text-muted-foreground">
                  Connect with motivated students who are learning the skills you need.
                </p>
                <Button className="w-full">Get matched with talent</Button>
              </div>
            </div>
          </div>
        </section>

        {/* 6. The Stakes */}
        <section className="w-full py-12 md:py-16 bg-primary/5">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="The Stakes"
                  width={500}
                  height={300}
                  className="rounded-lg object-cover"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  📉 Without a Bridge, Everyone Loses
                </h2>
                <p className="text-muted-foreground">
                  When universities and innovators stay siloed, students miss out on real-world skills—and the Web3 world misses out on fresh minds. Campus On Chain turns that story around.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 mt-0.5">
                      <span className="text-xs font-bold text-destructive">✕</span>
                    </div>
                    <p>Students graduate without practical Web3 experience</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 mt-0.5">
                      <span className="text-xs font-bold text-destructive">✕</span>
                    </div>
                    <p>Universities fall behind in cutting-edge technologies</p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-destructive/20 mt-0.5">
                      <span className="text-xs font-bold text-destructive">✕</span>
                    </div>
                    <p>Web3 companies struggle to find qualified candidates</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Transformation Section */}
        <section className="w-full py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-4">
                🔥 What Happens When You Join?
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-bold">Students</h3>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium">Become confident Web3 builders</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6">
                <School className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-bold">Universities</h3>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium">Become hubs of innovation</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border p-6">
                <Briefcase className="h-10 w-10 text-primary" />
                <h3 className="text-lg font-bold">Companies</h3>
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                    <ArrowRight className="h-4 w-4 text-primary" />
                  </div>
                  <p className="font-medium">Find mission-aligned talent</p>
                </div>
              </div>
            </div>
            <div className="text-center mt-10">
              <p className="text-xl font-medium">Let's build the future, together.</p>
              <Button size="lg" className="mt-6">
                Get Started Today
              </Button>
            </div>
          </div>
        </section>

        {/* 8. Newsletter Signup and Partners */}
        <section className="w-full py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">Stay Connected</h2>
                <p className="text-muted-foreground">
                  Sign up for our newsletter to get the latest updates on workshops, events, and opportunities.
                </p>
                <form className="flex flex-col gap-2 sm:flex-row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Our Partners</h3>
                <div className="grid grid-cols-3 gap-4">
                  {/* Partner logos placeholder */}
                  <div className="h-16 rounded-md bg-background flex items-center justify-center">Logo 1</div>
                  <div className="h-16 rounded-md bg-background flex items-center justify-center">Logo 2</div>
                  <div className="h-16 rounded-md bg-background flex items-center justify-center">Logo 3</div>
                  <div className="h-16 rounded-md bg-background flex items-center justify-center">Logo 4</div>
                  <div className="h-16 rounded-md bg-background flex items-center justify-center">Logo 5</div>
                  <div className="h-16 rounded-md bg-background flex items-center justify-center">Logo 6</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-sm text-muted-foreground">
          <div>
            <p>&copy; {new Date().getFullYear()} Campus on Chain. All rights reserved.</p>
          </div>
          <div className="flex gap-4 items-center">
            <Link href="#" className="hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="hover:underline underline-offset-4">
              Privacy
            </Link>
            <div className="flex gap-2 ml-4">
              {/* Social icons */}
              <Link href="#" className="hover:text-primary">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">X</div>
              </Link>
              <Link href="#" className="hover:text-primary">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">L</div>
              </Link>
              <Link href="#" className="hover:text-primary">
                <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">D</div>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
