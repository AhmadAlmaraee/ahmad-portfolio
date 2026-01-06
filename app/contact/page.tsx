import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: "#84994F" }}>
          Get In Touch
        </h1>
        <p className="text-xl text-gray-400 mb-16">Let's discuss your project or just say hello</p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#FFE797" }}>
              Contact Information
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in hearing about new opportunities, projects, or just connecting with fellow
              developers. Feel free to reach out through any of the channels below.
            </p>

            <div className="space-y-4">
              <Card className="p-4 bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#84994F] transition-colors">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#84994F" }}
                  >
                    <Mail className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="font-semibold text-white">ahmad@example.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#84994F] transition-colors">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#84994F" }}
                  >
                    <Github className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">GitHub</p>
                    <p className="font-semibold text-white">github.com/ahmad</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-[#1a1a1a] border-[#84994F]/30 hover:border-[#84994F] transition-colors">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#84994F" }}
                  >
                    <Linkedin className="h-6 w-6 text-black" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn</p>
                    <p className="font-semibold text-white">linkedin.com/in/ahmad</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: "#FFE797" }}>
              Send a Message
            </h2>
            <Card className="p-6 bg-[#1a1a1a] border-[#84994F]/30">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#84994F]/30 text-white focus:outline-none focus:border-[#84994F] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#84994F]/30 text-white focus:outline-none focus:border-[#84994F] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#84994F]/30 text-white focus:outline-none focus:border-[#84994F] transition-colors"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#2a2a2a] border border-[#84994F]/30 text-white focus:outline-none focus:border-[#84994F] transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full py-6 text-lg font-semibold"
                  style={{ backgroundColor: "#84994F", color: "#0a0a0a" }}
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
