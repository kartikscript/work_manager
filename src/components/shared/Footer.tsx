
export default function Footer(){
  return(
    <footer className="bg-gray-800 text-white py-8">
  <div className="container mx-auto flex justify-between items-center">
    <div className="text-2xl font-bold">Work Manager</div>

    <nav className="space-x-4">
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">Contact</a>
    </nav>

    <div>
      <p>Email: info@workmanager.com</p>
      <p>Phone: +1 (123) 456-7890</p>
    </div>

    <div className="flex space-x-4">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="/github.svg" alt="github" className="w-6 h-6"/>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="/twitter.svg" alt="Twitter" className="w-6 h-6"/>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img src="/linkedin.svg" alt="LinkedIn" className="w-6 h-6"/>
      </a>
    </div>
  </div>
</footer>
  )
}