import React from 'react'
function Footer() {
  return (


    <footer class=" shadow bg-gray-900 mt-6">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a href="" class="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-blue-500">PeekMart</span>
          </a>
          <ul class="flex flex-wrap items-center justify-center mb-6 text-sm font-medium  sm:mb-0 text-gray-400">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">About</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
            </li>
            <li>
              <a href="#" class="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
        <hr class="my-6  sm:mx-auto border-gray-700 lg:my-8" />
        <span class="block text-sm  text-center text-gray-400">© 2023 <a href="#" class="hover:underline">PeekMart™</a>. All Rights Reserved.</span>
      </div>
    </footer>


  )
}

export default Footer
