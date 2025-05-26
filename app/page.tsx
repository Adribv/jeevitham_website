import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Users,
  Brain,
  Shield,
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Jeevitham
              </span>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="#products" className="text-gray-700 hover:text-blue-600 transition-colors">
                Products
              </Link>
              <Link href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                  🚀 Revolutionary Healthcare Technology
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    Hospital Management
                  </span>{" "}
                  with AI
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Jeevitham provides comprehensive ERP solutions for hospitals, featuring advanced patient data
                  management and AI-powered chatbot assistance for seamless healthcare operations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
              </div>

            </div>
            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8">
                <Image
                  src="/Minimalist Health Tech Logo - 'jeevitham'.png"
                  alt="Jeevitham Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl blur-3xl opacity-20 transform rotate-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700">Our Products</Badge>
            <h2 className="text-4xl font-bold">Complete Healthcare Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive suite of products designed to revolutionize hospital management and patient
              care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">Hospital ERP System</CardTitle>
                <CardDescription className="text-lg">
                  Comprehensive enterprise resource planning for complete hospital management
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/erp website .jpg"
                  alt="Hospital ERP Dashboard"
                  width={400}
                  height={250}
                  className="rounded-lg w-full"
                />
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Patient Data Management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Easy database integration </span>
                  </li>
                 
                </ul>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl">AI-Powered Mobile App</CardTitle>
                <CardDescription className="text-lg">
                  Smart mobile application with AI chatbot for patients and healthcare providers
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Image
                  src="/user app.jpg"
                  alt="Mobile App with AI Chatbot"
                  width={400}
                  height={250}
                  className="rounded-lg w-full"
                />
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>AI Health Assistant</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Appointment Booking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Medical Records Access</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Real-time Notifications</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-100 text-blue-700">Key Features</Badge>
            <h2 className="text-4xl font-bold">Why Choose Jeevitham?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge technology with healthcare expertise to deliver unparalleled solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Data protection ",
                description:
                  "Enterprise-grade security ensuring complete patient data protection and privacy compliance.",
              },
              {
                icon: Brain,
                title: "AI-Powered Insights",
                description:
                  "Advanced AI algorithms provide intelligent insights about food intaking and diet planing",
              },
              {
                icon: Clock,
                title: "vaccination notifications",
                description:
                  "Vacination notification will be notified",
              },
              {
                icon: Users,
                title: "Multi-user Access",
                description:
                  "Role-based access control allowing seamless collaboration between doctors, nurses, and staff.",
              },
              {
                icon: BarChart3,
                title: "Advanced Analytics",
                description:
                  "Comprehensive reporting and analytics to optimize hospital operations and patient outcomes.",
              },
              {
                icon: Heart,
                title: "Patient-Centric",
                description: "Designed with patient care at the center, improving satisfaction and health outcomes.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-purple-100 text-purple-700">About Jeevitham</Badge>
                <h2 className="text-4xl font-bold">Revolutionizing Healthcare Technology</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Founded with a vision to transform healthcare delivery, Jeevitham combines deep healthcare domain
                  expertise with cutting-edge technology to create solutions that truly make a difference.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of healthcare professionals, software engineers, and AI specialists work together to build
                  products that not only streamline hospital operations but also enhance patient care and outcomes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="">
                  
                  
                </div>
                <div className="">
                 
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/Minimalist Health Tech Logo - 'jeevitham'.png"
                alt="About Jeevitham"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-purple-100 text-purple-700">Our Team</Badge>
            <h2 className="text-4xl font-bold">Meet the Visionaries</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team brings together expertise from healthcare, technology, and business to drive innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "N.V.Dhaanush",
                role: "founder &Developer",
                image: "/dhaanush.jpg",
                description: "Lead Developer and Visionary"
              },
              {
                name: "A.Dhinesh kumar",
                role: "founder &Developer",
                image: "/dhinesh.jpeg",
                description: "Full Stack Developer"
              },
              {
                name: "M.Madhavan ",
                role: "founder &Developer",
                image: "/madhavan.jpg",
                description: "UI/UX Developer"
              },
            ].map((member, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-white">
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder-user.jpg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-green-100 text-green-700">Get in Touch</Badge>
            <h2 className="text-4xl font-bold">Ready to Transform Your Hospital?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contact us today to learn how Jeevitham can revolutionize your healthcare operations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 8148402413</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">contact@jeevitham.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">Rajalakshmi engineering college thandalam chennai 602103</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>We'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Jeevitham</span>
              </div>
              <p className="text-gray-400">
                Transforming healthcare through innovative ERP solutions and AI technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Hospital ERP</li>
                <li>Mobile App</li>
                <li>AI Chatbot</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Documentation</li>
                <li>Help Center</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Jeevitham. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
