import Link from 'next/link'

export default function Home() {
  return (
 

   <>
    <div className="bg-blue-500 text-white py-16">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Work Manager</h1>
        <p className="text-lg mb-8">Effortlessly manage your work with our powerful work manager application.</p>
        <div className="flex justify-center">
          <Link href="/signup" className="bg-white text-blue-500 font-bold py-2 px-4 rounded-full hover:bg-blue-700 hover:text-white">Sign Up</Link>
        </div>
      </div>
    </div>
  
   
        <div className='bg-blue-500'>
    <div className="container  mx-auto ">
      <h2 className="text-2xl font-bold mb-8">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-blue-400 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Task Management</h3>
          <p>Organize and prioritize your tasks efficiently with our task management system.</p>
        </div>
  
        <div className="bg-blue-400 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Collaboration</h3>
          <p>Collaborate seamlessly with your team members on projects and tasks.</p>
        </div>
  
        <div className="bg-blue-400 p-6 rounded-md shadow-md">
          <h3 className="text-xl font-bold mb-2">Reports and Analytics</h3>
          <p>Gain insights into your work progress with detailed reports and analytics.</p>
        </div>
      </div>
    </div>
    </div>
  
   
    <div className="p-10  mx-auto bg-blue-500">
      <h2 className="text-2xl font-bold mb-8">Uses</h2>
      <ul className="list-disc pl-4">
        <li>Streamline project workflows</li>
        <li>Improve team collaboration</li>
        <li>Enhance task visibility and tracking</li>
       
      </ul>
    </div>
    </>
  )
}
