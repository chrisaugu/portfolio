export default function NavItem({ href, isActive, children }) {
  return (
    <li>
      {/*<a
        href={href}
        className={`block px-3 py-2 rounded-md rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 ${isActive ? 'bg-sky-500 text-white' : 'bg-slate-50'}`}
      >*/}
      {/*<a 
        href={href} 
        className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page"
      >*/}
      <a 
        href={href} 
        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        >
        {children}
      </a>
    </li>
  )
}
