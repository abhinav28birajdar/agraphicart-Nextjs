import React from 'react'
import Image from 'next/image'

export default function DeveloperLanding() {
  const currentYear = new Date().getFullYear()
  
  const socialIcons = [
    { name: 'Twitter', icon: 'twitter-x.svg', href: '' },
    { name: 'Instagram', icon: 'instagram.svg', href: '#' },
    { name: 'GitHub', icon: 'github.svg', href: '#' },
     { name: 'Linkdin', icon: 'linkedin.svg', href: '#' },
    { name: 'Facebook', icon: 'facebook.svg', href: '#' },
    { name: 'Behance', icon: 'behance.svg', href: '' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-50 to-white">
      {/* Main Content Section */}
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text- mb-6">
            Where Development Meets Design
          </h1>
          
          {/* Developer Focus Section */}
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">For Android Developers</h2>
              <p className="text-gray-600">
                Craft exceptional mobile experiences with precision and creativity. 
                Every line of code is an opportunity to innovate and inspire.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">For UI/UX Designers</h2>
              <p className="text-gray-600">
                Transform ideas into intuitive interfaces. Your designs bridge the gap 
                between human imagination and digital reality.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-purple backdrop-blur-sm shadow-md   py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between max-w-3xl mx-auto">
            <div className="mb-6 md:mb-0">
              <Image
                src="/black an white logo.jpg"
                alt="Logo"
                width={120}
                height={40}
                className="mb-4"
              />
              <p className="text-gray-600 text-sm">
              © {currentYear} Abhinav Birajdar. Designing the future, one pixel at a time.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {socialIcons.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-gray-600 hover:text-gray-900 transition-colors p-2 hover:bg-gray-100 rounded-full"
                  aria-label={social.name}
                >
                  <Image
                    src={social.icon}
                    alt={`${social.name} icon`}
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
